
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import './sellerform.css';
import Select from 'react-select';
import React,{useEffect, useState} from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import Loader from '../loading/load';

function Sellerform() {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);
  const navigate = useNavigate();
  const baseUrl = 'https://shop.hoolo.live/api/';
  const [loading,setLoading] = useState(false);
  const [divisionList,setDivisionList] =useState(null);
  const [cityList,setCityList] =useState([]);
  const [thanaList,setThanaList] = useState([]);
  const [zipList,setZipList] = useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl}hoolo/divisions`)
    .then((res)=>{
      const {status,data} = res;
      if(status === 200){
        setDivisionList(data);
      }
    })
    .catch();
  });
  
  const [errors,setErrors] = useState(null);
  const initial = {owner_name:'',phone:'',email:'',store_name:'',social_link:'',store_logo:null,product_picture:null,product_video:null,divison:'',city:'',thana:'',zip:'',store_address:'',agree:false};
  const [credentials,setcredentials] = useState(initial);
  const credentialHandler = (event) =>{
    const {name,value} = event.target;
    setcredentials({...credentials,[name]:value});
  }
  const logoHandler = (event) =>{
    const {name} = event.target;
    setcredentials({ ...credentials, [name]: event.target.files[0] }); 
  }

  const fileHandler = (event) =>{
    const {name} = event.target;
    setcredentials({ ...credentials, [name]: event.target.files });
  }

  const divisionHandler = (event) =>{
    if(event){
      const {value} = event;
      setcredentials({...credentials,division:value});
      axios.get(`${baseUrl}hoolo/cities`)
      .then((res)=>{
        const {status,data} = res;
        if(status === 200){
          setCityList(data);
        }
      }).catch();
    }else{
      setcredentials({...credentials,division:''});
    }
  }
  const cityHandler = (event) =>{
    if(event){
      const {value} = event;
      setcredentials({...credentials,city:value});
      axios.get(`${baseUrl}hoolo/${value}/thanas`)
      .then((res)=>{
        const {status,data} = res;
        if(status === 200){
          setThanaList(data);
        }
      })
      .catch();
    }else{
      setcredentials({...credentials,city:''});
    }
  }
  const thanaHandler = (event) =>{
    if(event){
      const {value} = event;
      setcredentials({...credentials,thana:value});
      if(credentials.city !== ''){
        axios.get(`${baseUrl}hoolo/${credentials.city}/${value}/zip`)
        .then((res)=>{
          const {status,data} = res;
          if(status === 200){
            setZipList(data);
          }
        })
        .catch();
      }
    }else{
      setcredentials({...credentials,thana:''});
    }
  }
  const zipHandler = (event) =>{
    if(event){
      const {value} = event;
      setcredentials({...credentials,zip:value});
    }else{
      setcredentials({...credentials,zip:''});
    }
  }

  const agreementHandler = (event) =>{
    if(event.target.checked){
      setcredentials({...credentials,agree:true});
    }else{
      setcredentials({...credentials,agree:false});
    }
  }

  const submitHandler = (event) =>{
    event.preventDefault();
    if(credentials.owner_name === '' || credentials.email === '' || credentials.phone === '' || credentials.division === '' || 
      credentials.city === '' || credentials.thana === '' || credentials.zip === '' || credentials.store_name === '' || credentials.store_address === '' || 
      credentials.product_picture === null || credentials.agree === false){
        toast.error('Please fill up all input fields');
    }
    else{
      setLoading(true);
      const bodyFormData = new FormData();
      bodyFormData.append('owner_name', credentials.owner_name);
      bodyFormData.append('email', credentials.email);
      bodyFormData.append('phone', credentials.phone);
      bodyFormData.append('division', credentials.division);
      bodyFormData.append('city', credentials.city);
      bodyFormData.append('thana', credentials.thana);
      bodyFormData.append('zip', credentials.zip);
      bodyFormData.append('store_name', credentials.store_name);
      bodyFormData.append('store_address', credentials.store_address);
      bodyFormData.append('store_logo', credentials.store_logo);
      bodyFormData.append('social_link', credentials.social_link);
      for(var i=0; i<credentials.product_picture.length;i++){
        bodyFormData.append('product_picture[]', credentials.product_picture[i]);
      }
      if(credentials.product_video !== null){
        for(var i=0; i<credentials.product_video.length;i++){
          bodyFormData.append('product_video[]', credentials.product_video[i]);
        }
      }
      
      axios.post('https://shop.hoolo.live/api/seller-request-form',bodyFormData)
      .then((res)=>{
        if(res.status === 202){
          setErrors(res.data);
          setLoading(false);
        }
        if(res.status === 200){
          toast.success('Your application has been received. Our vendor representative will contact you shortly');
          navigate('/',{replace:false});
          setLoading(false);
        }
      })
      .catch((res)=>{
        setLoading(false);
        console.log(res.data);
      });
    }
  }

  if(loading){
    return <Loader/>
  }
  return (
    <Container className="bg-white shadow-lg rounded pt-5 mb-5 text-black px-5 py-5">
      <Row>
        <Col>
          <h1>Seller Registration From</h1>
        </Col>
      </Row>
          <Form >
          <Row>
            <Col md={6} sm={6} xs={12}>
              <Form.Group>
                <Form.Label className="text-black font-Normal">Full Name (Owner)</Form.Label>
                {
                  errors && errors.hasOwnProperty('owner_name') && (
                    <Alert variant="danger">
                      {errors.owner_name}
                    </Alert>
                  )
                }
                <Form.Control
                  type="text"
                  name="owner_name"
                  placeholder="Your name"
                  value={credentials.owner_name}
                  onChange={credentialHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone</Form.Label>
                {
                  errors && errors.hasOwnProperty('phone') && (
                    <Alert variant="danger">
                      {errors.phone}
                    </Alert>
                  )
                }
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={credentials.phone}
                  onChange={credentialHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                {
                  errors && errors.hasOwnProperty('email') && (
                    <Alert variant="danger">
                      {errors.email}
                    </Alert>
                  )
                }
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={credentials.email}
                  onChange={credentialHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company name (Store Name)</Form.Label>
                {
                  errors && errors.hasOwnProperty('store_name') && (
                    <Alert variant="danger">
                      {errors.store_name}
                    </Alert>
                  )
                }
                <Form.Control
                  type="text"
                  name="store_name"
                  placeholder="Store name"
                  value={credentials.store_name}
                  onChange={credentialHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Social Profile Link (Optional)</Form.Label>
                {
                  errors && errors.hasOwnProperty('social_link') && (
                    <Alert variant="danger">
                      {errors.social_link}
                    </Alert>
                  )
                }
                <Form.Control
                  type="text"
                  name="social_link"
                  placeholder="Facebook / Instragram/ YouTube"
                  value={credentials.social_link}
                  onChange={credentialHandler}
                />
              </Form.Group>
              <Form.Group>
              <Form.Label>Store Logo (Optional)</Form.Label>
              {
                errors && errors.hasOwnProperty('store_logo') && (
                  <Alert variant="danger">
                    {errors.store_logo}
                  </Alert>
                )
              }
                <input name="store_logo" onChange={logoHandler} className="form-control form-control-lg" id="formFileLg" type="file"></input>
              </Form.Group> 
            </Col>
            <Col md={6} sm={6} xs={12}>


          <Form.Group>
            <Form.Label>Sample Product Pictures</Form.Label>
            {
              errors && errors.hasOwnProperty('product_picture') && (
                <Alert variant="danger">
                  {errors.product_picture}
                </Alert>
              )
            }
            <input  multiple name="product_picture" onChange={fileHandler} className="form-control form-control-lg" id="formFileLg" type="file"></input>
          </Form.Group> 

          <Form.Group>
          <Form.Label>Sample Product Videos (Optional)</Form.Label>
          {
            errors && errors.hasOwnProperty('product_video') && (
              <Alert variant="danger">
                {errors.product_video}
              </Alert>
            )
          }
            <input  multiple name="product_video" onChange={fileHandler} className="form-control form-control-lg" id="formFileLg" type="file"></input>
          </Form.Group> 
             
              <Form.Group className="mb-1">
                <Form.Label>Store Location</Form.Label>
                {
                  errors && errors.hasOwnProperty('division') && (
                    <Alert variant="danger">
                      {errors.division}
                    </Alert>
                  )
                }
                {
                  errors && errors.hasOwnProperty('city') && (
                    <Alert variant="danger">
                      {errors.city}
                    </Alert>
                  )
                }
                {
                  errors && errors.hasOwnProperty('thana') && (
                    <Alert variant="danger">
                      {errors.thana}
                    </Alert>
                  )
                }
                {
                  errors && errors.hasOwnProperty('zip') && (
                    <Alert variant="danger">
                      {errors.zip}
                    </Alert>
                  )
                }
                <div className="add">
                  <Row>
                    <Col className="mb-2" lg={6} md={6} xs={12}>
                      <Select
                        placeholder="division"
                        isClearable={true}
                        isSearchable={true}
                        name="divison"
                        options={divisionList}
                        onChange={divisionHandler}
                      />
                    
                    </Col>
                    <Col className="mb-2" lg={6} md={6} xs={12}>
                      <Select
                      placeholder="city"
                      isClearable={true}
                      isSearchable={true}
                      name="city"
                      options={cityList}
                      onChange={cityHandler}
                      />
                    </Col>
                    <Col className="mb-2" lg={6} md={6} xs={12}>
                      <Select
                      placeholder="thana"
                      isClearable={true}
                      isSearchable={true}
                      name="thana"
                      options={thanaList}
                      onChange={thanaHandler}
                      />
                    </Col>
                    <Col className="mb-2" lg={6} md={6} xs={12}>
                      <Select
                      placeholder="zip code"
                      isClearable={true}
                      isSearchable={true}
                      name="zip"
                      options={zipList}
                      onChange={zipHandler}
                      />
                    </Col>
                  </Row>
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Store Address </Form.Label>
                {
                  errors && errors.hasOwnProperty('store_address') && (
                    <Alert variant="danger">
                      {errors.store_address}
                    </Alert>
                  )
                }
                <Form.Control
                  type="address"
                  name="store_address"
                  placeholder="Address"
                  value={credentials.store_address}
                  onChange={credentialHandler}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="ckeck">
                  <Form.Check type="checkbox" name="agreement" onChange={agreementHandler} />
                  <label>I have read and agreed to the <Link className="clickableLink" to="/seller-agreement">seller agreement</Link></label>
                </div>
              </Form.Group>
              <div className="btnsubmit">
                <Button className="submitbtn" varient="none" onClick={submitHandler}>
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
          
          <br></br>
          </Form>

    </Container>
        
  );
};

export default Sellerform;
