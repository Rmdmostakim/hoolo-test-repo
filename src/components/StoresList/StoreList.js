import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleHeader from "../Atomics/SectionHeader/SingleSectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentsDollar} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import './StoreList.css';
import { useDispatch, useSelector } from "react-redux";
import { setFollow } from "../../features/FollowSlice";
import storeLogo from '../../assets/images/store.png';
import Loader from '../loading/load';
import StoreProduct from "./StoreProductSlider";
const StoreList = (props) => {
  const {follow} = useSelector((state)=>state.follow);
  const {products,stores} = props;
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  const checkFollow = (storeId) =>{
      if (follow) {
        if(follow.includes(storeId)){
          return true;
        }
        return false;
    }
    return false;
  }
  const followHandler =(storeId)=>{
    if(id){
      const url = `${process.env.REACT_APP_BASE_URL}/follow`;
      axios.post(url,{user_id:id,store_id:storeId}).then((res)=>{
        if(res.status === 202){
          dispatch(setFollow(storeId));
        }
      }).catch((err)=>{
        console.log(err);
      });
      
    }else{
      swal("You Have to Login!", "login now", "error");
    }
  }

  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);

  if(products === null){
    return <Loader/>
  }

  return (
    <ContentWrapper> 
        <div className="video-block section-padding my-2">
          <div className="container">
            <Row style={{paddingInline:'2px'}}>
              {
                stores.map((store, index) =>{
                  const {uuid} = store;
                  const storePro = products.filter(product=>product.store.uuid === uuid)
                  return(
                    <Col xl={12} sm={12} xs={12} className='store-card' key={index}>
                      <div className='store-slide-item'>
                        <div className="storeTop">
                          <div className="logo_name">
                            <Link to={`/vendors/videos/${store.uuid}`}>
                              <div className="storeLogo">
                                {store.store_logo == null ? (
                                  <img className="store_logo" src={storeLogo} alt="store" />
                                ):(
                                  <img className="store_logo" src={store.store_logo} alt={store.name} />
                                )}
                              </div>
                            </Link>
                            <div className="storeInfo">
                              <div className="storeName" style={{fontWeight:'600',color:'black'}}>
                                <div><Link style={{fontWeight:'600',color:'black'}} to={`/vendors/videos/${store.uuid}`} >{store.name}</Link></div>
                                <div className='follow-block' style={{ cursor:'pointer' }} onClick={()=>followHandler(store.id)}>
                                  {checkFollow(store.id) ? <FontAwesomeIcon icon={faBell} /> :<span style={{ color:'blue',fontWeight:'bold' }}>Follow</span>}
                                </div><br/>
                              </div>
                              <div className="storeAdd">
                                  <iconify-icon icon="ei:location"></iconify-icon>
                                  {store.thana},
                                  {store.city}
                              </div>
                            </div>

                          </div>  
                        </div>
                        <div className="storePro">
                          <StoreProduct product={storePro} />
                         </div>
                          <Link to={`/vendors/products/${store.uuid}`}>
                            <div style={{display:'flex',alignItems:'center',marginBottom:'2px',justifyContent: 'flex-end'}}>
                              <h6 style={{paddingTop:'6px',marginRight:'2px',fontSize:'14px', fontWeight:'500',color:'black'}}>See All</h6><box-icon name='right-arrow-alt' animation='flashing' ></box-icon> 
                            </div>
                          </Link>
                      </div>
                    </Col>
                  );
                })
              }
            </Row>
          </div>
        </div>
    </ContentWrapper>
  );
}

export default StoreList;