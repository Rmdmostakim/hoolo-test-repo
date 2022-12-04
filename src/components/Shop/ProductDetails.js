import React,{useEffect,useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row,Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Slider from "react-slick";
import toast from 'react-hot-toast';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Classes from './product.details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCart,showCart } from '../../features/CartSlice';
import { showFilter } from '../../features/AppSlice';
import Loader from '../common/Loader';
import ShopTwo from '../ShopTwo/Shop';
import Pronav from '../Navigation/ProNav';
import Notfound from '../loading/Notfound';

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {products,videoLoading,videoSuccess} = useSelector((state)=>state.app);
  const [isloading, setIsloading] = useState(true);
  const [notfound,setNotfound] = useState(false);
  const { slug } = useParams();
  const [currentPro,setCurrentPro] = useState(null);
  const [maxQnt,setMaxQnt] = useState(null);
  const [minQnt,setMinQnt] = useState(null);
  const userId = localStorage.getItem("id");
  const [color,setColor] = useState(null);
  const [size,setSize] = useState(null);
  const [productColor,setProductColor] = useState(null);
  const [productSize,setProductSize] = useState(null);

  const initialValue = {id:0,qty:1,color:null,size:null};
  const [credentials,setCredentials] = useState(initialValue);
  //width handler
  const [width, setWidth] = useState(window.innerWidth);
  const windowWidth = () => {
      const position = window.innerWidth;
      setWidth(position);
  };
  //cart and serach bar hide
  const hideHandler = () =>{
      dispatch(showCart(false));
      dispatch(showFilter(false));
  }

  useEffect(()=>{
    axios.get(`https://shop.hoolo.live/api/productdetails/${slug}`)
    .then((res)=>{
      if(res.status === 200){
        if(res.data){
          setCurrentPro(res.data);
          setProductColor(res.data.color);
          setProductSize(res.data.size);
          setMinQnt(res.data.min);
          if(res.data.stock<res.data.max){
            setMaxQnt(res.data.stock);
          }else{
            setMaxQnt(res.data.max);
          }
          setCredentials({...credentials,qty:res.data.min});
          setCredentials({...credentials,id:res.data.id});
        }else{
          setNotfound(true);
        }
        setIsloading(false);
      }
    });
    window.addEventListener('resize', windowWidth);
    window.scrollTo({
        top: 0,
    });
    return () => {
        window.removeEventListener('resize', windowWidth);
    };
  },[slug]);
  // add to cart
  const addToCart = () => {
    if(!userId){
      toast.error('You have to login first!');
      navigate('/login',{replace:false});
    }
    if (userId) {
      if( productColor !== null && productColor !==''  && color === null){
        toast.error('Choose a color!');
      }
      else if(productSize !== null && productSize !=='' && size === null){
        toast.error('Choose a size!');
      }else{
       dispatch(addCart(credentials));
      }  
    }
  };
  //increment qty 
  const incrementQty = ()=>{
    const value = credentials.qty+1;
    if(value<=maxQnt){
      setCredentials({...credentials,qty:value});
    }else{
      toast.error('The product is not available is your desired quantity');
    }
  }
  //decrement
  const decrementQty = ()=>{
    const value = credentials.qty-1;
    if(value>=minQnt){
      setCredentials({...credentials,qty:value});
    }else{
      toast.error('The product is not available is your desired quantity');
    }
  }
  // color picker
  const colorPicker = (value) =>{
    setColor(value);
    setCredentials({...credentials,color:value});
  }
  //size picker
  const sizePicker = (value) =>{
    setSize(value);
    setCredentials({...credentials,size:value});
  }

  // buy now 
  const buyNow = (productInfo) =>{
    if(!userId){
      toast.error('You have to login first!');
      navigate('/login',{replace:false});
    }
    const variation = [color,size];
    const cart = {
      id: 0,
      user_id: userId,
      product_id: productInfo.id,
      qty: credentials.qty,
      atrributes:JSON.stringify(variation),
      product:productInfo
    }
    if(productColor && productSize && color && size){
      if(productInfo.stock>0){
        navigate('/checkout',{state:{path:'buy-now',cart:cart}});
      }else{
        toast.error('The product is not available is your desired quantity');
      }
    }else if(productColor && color && !productSize){
      if(productInfo.stock>0){
        navigate('/checkout',{state:{path:'buy-now',cart:cart}});
      }else{
        toast.error('The product is not available is your desired quantity');
      }
    }else if(productSize && size && !productColor){
      if(productInfo.stock>0){
        navigate('/checkout',{state:{path:'buy-now',cart:cart}});
      }else{
        toast.error('The product is not available is your desired quantity');
      }
    }else if(!productColor && !productSize){
      if(productInfo.stock>0){
        navigate('/checkout',{state:{path:'buy-now',cart:cart}});
      }else{
        toast.error('The product is not available is your desired quantity');
      }
    }else{
      toast.error('Select product variant');
    }
  }

  // slider settings
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  },[slider1,slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
  };

  const settingsThumbs = {
    slidesToScroll: 1,
    vertical: false,
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const productDetails = () =>{
    const relatedProducts = products.filter(product=>Number(product.category_id) === Number(currentPro.category_id));
    return (
      <div>
      <div className='container' onClick={hideHandler}>
        
          <Row className="justify-content-center">
            <Col md={4} sm={12}>
              <div className={Classes.mainSlider}>
                <Slider
                  {...settingsMain}
                  asNavFor={nav2}
                  ref={slider => (setSlider1(slider))}
                >
                  {currentPro && currentPro.images.map((product)=>{
                    const {id,image} = product;
                    return (
                      <div key={id}>
                        <img className={Classes.sliderImage} src={image} alt={currentPro.product_name} />
                      </div>
                    );
                  })}   
                </Slider> 
              </div>
              <div className={Classes.thumbContainer}>
                <Slider
                  {...settingsThumbs}
                  slidesToShow={currentPro.images.length === 1 ? 1 : currentPro.images.length === 2 ? 2 : currentPro.images.length === 3 ? 3 : 4}
                  asNavFor={nav1}
                  ref={slider => (setSlider2(slider))}
                >
                  {currentPro && currentPro.images.map((product)=>{
                    const {id,image} = product;
                    return (
                      <div key={id}>
                        <img className={Classes.thumbImage} src={image} alt={currentPro.product_name} />
                      </div>
                    );
                  })}   
                </Slider>   
              </div>
            </Col>
            <Col md={8} sm={12}>
              <h4 style={{ color:'black', fontWeight:'500' }}>{currentPro.product_name}</h4>
              <p className='text-dark font-weight-bold' >By: <Link style={{ color:'blue' }} to={`/vendors/videos/${currentPro.store.uuid}`}>{currentPro.store.name }</Link></p>
              <hr className={Classes.hr}/>
              <p className="text-dark"><span className="font-weight-bold">Brand: </span><span>{currentPro.brand.name}</span></p>
              <p className="text-dark">
                <span className="font-weight-bold">Availability: </span>
                <span>{currentPro.stock === 0 ? 'Stock Out' :'In Stock' }</span>
              </p>
              <p className="text-dark">
                <span className="font-weight-bold">Stock: </span>
                <span>{currentPro.stock}</span>
              </p>
              {currentPro.color && (
                <div>
                  <h6 className="font-weight-bold">Color</h6>
                  <div className={Classes.colorCard}>
                  {currentPro.color[0].split(',').map((data)=>{
                    return <div key={Math.random()} className={Classes.colorPlate} id={data === color ? 'select':''} style={{ backgroundColor:`${data}` }} onClick={()=>colorPicker(data)}></div>
                  })}
                  </div>
                </div>
              )}
              {currentPro.size &&(
                <div>
                  <h6 className="font-weight-bold">Size</h6>
                  <div className={Classes.colorCard}>
                    {currentPro.size[0].split(',').map((data)=>{
                      return <div key={Math.random()} className={Classes.sizePlate} id={data === size ? 'select':''} onClick={()=>sizePicker(data)}>{data}</div>
                    })}
                  </div>
                </div>
              )}
              <div className="mb-2">
                <h6 className="font-weight-bold">Quantity</h6>
                <div className={Classes.quantity}>
                  <Button size="sm" variant="none" className="font-weight-bold" onClick={decrementQty}>-</Button>
                  <Button size="sm" variant="none" className="font-weight-bold">{credentials.qty}</Button>
                  <Button size="sm" variant="none" className="font-weight-bold" onClick={incrementQty}>+</Button>
                </div>
              </div>
              <h6 className="text-dark mb-2">
                <span className="font-weight-bold">Price: </span>
                {currentPro.offer_price && <small className="font-weight-bold"><del>{currentPro.offer_price} Tk</del> </small>}
                <span className="font-weight-bold">{ currentPro.unit_price }</span>
              </h6>
              <div className="mb-3">
                  <Button size="sm" variant='none' className={Classes.addToCart} onClick={()=>addToCart()}>Add to Cart</Button>
                  {
                    currentPro.stock === 0 ? <Button disabled size="sm">Buy</Button>: 
                    <Button onClick={()=>buyNow(currentPro)} className={Classes.buyNow} variant="none" size="sm">Buy</Button>
                  }
              </div>
              <div>
                <h6 className="font-weight-bold">Product Details</h6>
                <ul>
                  <li style={{ listStyle:'none' }} dangerouslySetInnerHTML={{__html: currentPro.product_detail}}/>
                </ul>
              </div>
            </Col>
          </Row>
      </div>    
      <div className="mt-5">
        <h6 className="font-weight-bold text-center">Related Product</h6>
        <ShopTwo products={relatedProducts} isCategory={false}/>
      </div>
    </div>
    );
  }

  if(notfound){
    return <Notfound/>
  }
  
  return (
    <div>
      {isloading || videoLoading ? <Loader/> : null}
      {!isloading && videoSuccess ? productDetails() : null}
      {width< 600 && <Pronav addToCart={addToCart} buyNow={()=>buyNow(currentPro)} />}
    </div>
  );
}

export default ProductDetails;
