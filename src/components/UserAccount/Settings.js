import React,{useState} from 'react';
import {Col, Row,Form} from 'react-bootstrap';
import Class from './settings.module.css';
import { useDispatch, useSelector } from 'react-redux';
import user  from '../Video/Comments/user.png';
import {AiFillEdit} from 'react-icons/ai';
import {BiLogOutCircle} from 'react-icons/bi';
import {ImBin2} from 'react-icons/im';
import { Modal, Button,Input } from 'rsuite';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setProfile } from '../../features/ProfileSlice';
import { useEffect } from 'react';
import {logout} from "../Auth/firebase";
import { logoutCart } from "../../features/CartSlice";
import {useNavigate} from "react-router-dom";

export default function Settings() {
    const {id,name,mobile,address,avatar,social,email} = useSelector((state)=>state.profile);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [addresses,setAddresses] = useState(null);
    const [profileModal,setProfileModal] = useState(false);
    const handleProfileModalOpen = () => {setProfileModal(true);setCredentials(initialCredentials)};
    const handleProfileModalClose = () => setProfileModal(false);
    const [editName,setEditName] = useState(false);
    const [editPhone,setEditPhone] = useState(false);
    const [editEmail,setEditEmail] = useState(false);

    const handleEditname = () => {setEditName(true);setCredentials(initialCredentials)};
    const handleEditphone = () => setEditPhone(true);
    const handleEditemail = () => setEditEmail(true);

    const nameView =()=>{
        if(!editName){
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Name</b></div>
                    <div><b>{name}</b></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={handleEditname}>Edit</Button>
                    </div>
                </div>
            );
        }else{
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Name</b></div>
                    <div><Input size="sm" placeholder="Enter name" name="name" value={credentials.name} onChange={credentialsHnadler} style={{ width:'80%' }} /></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={submitName}>Save</Button>
                    </div>
                </div>
            );
        }
    }
    const phoneView =()=>{
        if(!editPhone){
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Phone</b></div>
                    <div><b>{mobile}</b></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={handleEditphone}>Edit</Button>
                    </div>
                </div>
            );
        }else{
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Phone</b></div>
                    <div><Input size="sm" placeholder="Enter phone" name="phone" value={credentials.phone} onChange={credentialsHnadler} style={{ width:'80%' }} /></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={submitPhone}>Save</Button>
                    </div>
                </div>
            );
        }
    }
    const emailView =()=>{
        if(!editEmail){
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Email</b></div>
                    <div><b>{email && email !=='null' && email}</b></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={handleEditemail}>Edit</Button>
                    </div>
                </div>
            );
        }else{
            return (
                <div className={`${Class.items} ${Class.bb} p-3`}>
                    <div><b>Email</b></div>
                    <div><Input size="sm" placeholder="Enter email" name="email" value={credentials.email} onChange={credentialsHnadler} style={{ width:'80%' }} /></div>
                    <div>
                        <Button size="sm" appearance="subtle" onClick={submitEmail}>Save</Button>
                    </div>
                </div>
            );
        }
    }
    const initialCredentials = {name:name,phone:mobile,email: email !== 'null' ? email  : '',avatar:null};
    const [credentials,setCredentials] = useState(initialCredentials);
    const credentialsHnadler = (value,event) =>{
        const {name} = event.target;
        setCredentials({...credentials,[name]:value});
    }
    const avatarHandler = (event) =>{
        const {name} = event.target;
        setCredentials({ ...credentials, [name]: event.target.files[0] }); 
    }

    const baseUrl = 'https://shop.hoolo.live/api/';

    const submitName = () =>{
        axios.post(`${baseUrl}profile/username`,{name:credentials.name,user_id:id})
        .then((res)=>{
            if(res.status === 200){
                toast.error('Invlid input name');
            }
            if(res.status === 202){
                setEditName(false);
                dispatch(setProfile(res.data));
                toast.success('Name has been changed');
            }
        }).catch(()=>toast.error('Something went wrong! Try again'));
    }
    const submitPhone = () =>{
        const regex = /(^(8801|01))[1|3-9]{1}(\d){8}$/;
        const valid = regex.test(credentials.phone);
        if(valid){
            axios.post(`${baseUrl}profile/phone`,{phone:credentials.phone,user_id:id})
            .then((res)=>{
                if(res.status === 200){
                    toast.error(res.data.phone);
                }
                if(res.status === 202){
                    setEditPhone(false);
                    dispatch(setProfile(res.data));
                    toast.success('Phone has been changed');
                }
            })
            .catch(()=>toast.error('Something went wrong! Try again'));
        }else{
            toast.error('Invlid input phone number');
        }
    }
    const submitEmail = () =>{
        setEditEmail(false);
        axios.post(`${baseUrl}profile/email`,{email:credentials.email,user_id:id})
        .then((res)=>{
            if(res.status === 200){
                toast.error(res.data.phone);
            }
            if(res.status === 202){
                setEditPhone(false);
                dispatch(setProfile(res.data));
                toast.success('Email has been changed');
            }
        })
        .catch(()=>toast.error('Something went wrong! Try again'));
    }
    const submitAvatar = () =>{
        if(credentials.avatar && credentials.avatar != ''){
            const bodyFormData = new FormData();
            bodyFormData.append('user_id', id);
            bodyFormData.append('avatar', credentials.avatar);
            axios.post(`${baseUrl}profile/avatar`,bodyFormData)
            .then((res)=>{
                if(res.status === 200){
                    toast.error(res.data.avatar);
                }
                if(res.status === 202){
                    setEditPhone(false);
                    dispatch(setProfile(res.data));
                    setProfileModal(false);
                    toast.success('Profile has been changed');
                }
                console.log(res);
            })
            .catch((error)=>console.log(error));
        }else{
            toast.error('Invalid profile picture');
        }
    }
    const getAddresses = () =>{
        axios.get(`${baseUrl}shippingaddress/${id}`)
        .then((res)=>{
            const {status,data} = res;
            if(status === 200){
                if(data.length>0){
                    setAddresses(data);
                }
            }
        })
        .catch((error)=>{
            console.log('server error');
        });
    }
    const removeAddressHandler = (id) =>{
        axios.get(`https://shop.hoolo.live/api/remove-shippingaddress/${id}`)
        .then((res)=>{
            if(res.status === 200){
                toast.success('Address removed successfully!');
                window.location.reload();
            }else{
                toast.error('Address remove failed!');
            }
        })
        .catch(()=>{
            toast.error('Address remove failed!');
        });
    }

    const Signout = () => {
        logout();
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("avatar");
        localStorage.removeItem("mobile");
        localStorage.removeItem("address");
        dispatch(logoutCart());
        history("/login",{replace:true});
    };

    useEffect(()=>{
        getAddresses();
    },[addresses]);

    return (
        <>
        <div className="mt-2">
            <Row className='justify-content-center'>
                <Col md={2} sm={12} xsm={12} className="text-center mb-2">
                    <div className={Class.avatarContainer}>
                        <div className={Class.avatar}>
                            <div>
                                {avatar === null ? <img src={user} alt={name}/> : <img src={avatar}  referrerPolicy="no-referrer"  alt={name} />}
                            </div>
                            <div className={Class.overlayBtn}>
                                <Button size="sm" appearance="subtle" onClick={handleProfileModalOpen}><AiFillEdit/></Button>
                            </div>
                        </div>
                        <div>
                            <h6><small className="font-weight-bold text-dark">{name.toUpperCase()}</small></h6>
                            <Button size="sm" appearance="subtle" onClick={Signout}><BiLogOutCircle/> Logout</Button>
                        </div>
                    </div>
                </Col>
                <Col md={10} sm={12} xsm={12} className="mb-2">
                    <Row className="justify-content-center">
                        <Col md={10} sm={12}>
                            <h6>Account Information</h6>
                            <div className={Class.informations}>
                                {nameView()}
                                {phoneView()}
                                {emailView()}
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={10} sm={12}>
                            <h6 className={Class.bb}>Shipping Information</h6>
                            <Row className="mt-3">
                                {addresses && addresses.map((address)=>{
                                    return(
                                        <Col md={3} sm={6} xsm={6} key={address.id}>
                                            <div className={Class.addressContainer}>
                                                <div className={Class.addressBox}>
                                                    <div>
                                                        <small><b>Name: </b>{address.name}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>Phone: </b>{address.phone}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>Address: </b>{address.address}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>Post Code: </b>{address.zip}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>Thana: </b>{address.thana}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>City: </b>{address.city}</small>
                                                    </div>
                                                    <div>
                                                        <small><b>Division: </b>{address.division}</small>
                                                    </div>
                                                </div>
                                                <div className='text-center mt-2'>
                                                    <Button size="sm" color="red" appearance="primary" onClick={()=>removeAddressHandler(address.id)}><ImBin2/></Button>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <Modal backdrop="static" keyboard={false} open={profileModal} onClose={handleProfileModalClose}>
            <Modal.Body>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose Your Profile Picture</Form.Label>
                    <Form.Control type="file" name="avatar" onChange={avatarHandler}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={submitAvatar} appearance="primary">Save</Button>
                <Button onClick={handleProfileModalClose} appearance="subtle">Cancel</Button>
            </Modal.Footer>
        </Modal>
        </>
        
    );
}
