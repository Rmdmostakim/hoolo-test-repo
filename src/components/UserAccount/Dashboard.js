import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container,Modal } from 'react-bootstrap';
import Class from '../../assets/css/dashboard.module.css';
import user  from '../Video/Comments/user.png';
import {getProfile } from '../../features/ProfileSlice';
import {AiFillLike} from 'react-icons/ai';
import {RiUserHeartFill,RiLogoutBoxRFill} from 'react-icons/ri';
import {MdArrowForwardIos,MdAccountBalanceWallet} from 'react-icons/md';
import {FaTruck,FaCog} from 'react-icons/fa';
import {TbTruckReturn} from 'react-icons/tb';
import {BsTrophy} from 'react-icons/bs';
import {BiStar} from 'react-icons/bi';
import banner from '../../assets/images/live-banner.jpg';
import { Link } from 'react-router-dom';
import { Drawer,Placeholder } from 'rsuite';
import Likes from './Likes';
import Follow from './Follow';
import Orders from './Orders';
import {logout} from "../Auth/firebase";
import { logoutCart } from "../../features/CartSlice";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import Settings from './Settings';


function Dashboard() {
    const history = useNavigate();
    const {id,name,mobile,address,avatar,social} = useSelector((state)=>state.profile);
    const [showLiked, setShowLiked] = useState(false);
    const handleShowLiked = () => setShowLiked(true);
    const [showFollowed, setShowFollowed] = useState(false);
    const handleShowFollowed = () => setShowFollowed(true);
    const [showOrders, setShowOrders] = useState(false);
    const [ordersTittle,setOrdersTitle] = useState(null);
    const handleShowOrders = (title) => {
        setOrdersTitle(title);
        setShowOrders(true)
    };
    const ordersTitleHandler = (title) =>setOrdersTitle(title);

    const [showSettings,setShowSettings] = useState(false);
    const handleShowSettings = () => setShowSettings(true);

    const signout = () => {
        logout();
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("avatar");
        localStorage.removeItem("mobile");
        localStorage.removeItem("address");
        dispatch(logoutCart());
        toast.success("See you soon, logout Successful");
        history("/login",{replace:true});
      };

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProfile());
        window.scrollTo({
            top: 0,
        });
      },[dispatch]);
    
    return (
        <>
            <Container className="mt-4">
                <div className={Class.dashboard}>
                    <div className={`${Class.cards} mb-3`}>
                        <div className={Class.profile}>
                            <div>{avatar === null ? <img src={user} className="avatar" alt={name}/> : <img src={avatar} className="avatar" referrerPolicy="no-referrer"  alt={name} />}</div>
                            <div className={Class.profileName}> {name}</div>
                        </div>
                        <div className={Class.profileInfo}>
                            <div className={Class.infoTab} onClick={handleShowLiked}>
                                <div>
                                    <Button variant="none" size="sm"><AiFillLike className={Class.icons}/></Button>
                                </div>
                                <div>
                                    <small>Likes</small>
                                </div>
                            </div>
                            <div className={Class.infoTab} onClick={handleShowFollowed}>
                                <div>
                                    <Button variant="none" size="sm"><RiUserHeartFill className={Class.icons}/></Button>
                                </div>
                                <div>
                                    <small>Following</small>
                                </div>
                            </div>
                            <div className={Class.infoTab} onClick={handleShowSettings}>
                                <div>
                                    <Button variant="none" size="sm"><FaCog className={Class.icons}/></Button>
                                </div>
                                <div>
                                    <small>Settings</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Class.cards} mb-3 `}>
                        <div className={Class.orders}>
                            <div className={Class.ordersTitle}>
                                <div>
                                    My Orders
                                </div>
                                <div>
                                    <Button variant="none" size="sm" onClick={()=>handleShowOrders('all')}>See All <MdArrowForwardIos/></Button> 
                                </div>
                            </div>
                            <div className={`${Class.ordersTab} mt-3 `}>
                                <div className={Class.infoTab} onClick={()=>handleShowOrders('processing')}>
                                    <div>
                                        <Button variant="none" size="sm"><MdAccountBalanceWallet className={Class.icons}/></Button>
                                    </div>
                                    <div>
                                        <small>Processing</small>
                                    </div>
                                </div>
                                <div className={Class.infoTab} onClick={()=>handleShowOrders('shipped')}>
                                    <div>
                                        <Button variant="none" size="sm"><FaTruck className={Class.icons}/></Button>
                                    </div>
                                    <div>
                                        <small>Shipped</small>
                                    </div>
                                </div>
                                <div className={Class.infoTab} onClick={()=>handleShowOrders('returned')}>
                                    <div>
                                        <Button variant="none" size="sm"><TbTruckReturn className={Class.icons}/></Button>
                                    </div>
                                    <div>
                                        <small>Returned</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Class.cards} mb-3 `}>
                        <div className={Class.liveBanner}>
                            <img src={banner} alt="live banner" />
                            <div className={Class.overlay}>
                                <Button variant='success' size='sm'><Link to="/streaming">Go Live</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Class.cards} mb-3 `}>
                    <div>
                        <small><BiStar/>&emsp;Suggested for you</small>
                    </div>
                </div>
                <div className={`${Class.cards} mb-3 `}>
                    <div>
                        <small className='font-weight-bold'><BsTrophy/>&emsp;Best Seller</small>
                    </div>
                </div>
            </Container>
            {/* liked drawer */}
            <Drawer style={{ width:'100%' }} placement="right" open={showLiked} onClose={() => setShowLiked(false)}>
                <Drawer.Header>
                    <Drawer.Title>Your Liked Videos</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body style={{ padding:'0px' }}>
                    <Likes/>
                </Drawer.Body>
            </Drawer>
            {/* followed drawer */}
            <Drawer style={{ width:'100%' }} placement="right" open={showFollowed} onClose={() => setShowFollowed(false)}>
                <Drawer.Header>
                    <Drawer.Title>Your Following Stores</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body style={{ padding:'0px' }}>
                    <Follow/>
                </Drawer.Body>
            </Drawer>
            {/* orders drawer */}
            <Drawer style={{ width:'100%' }} placement="right" open={showOrders} onClose={() => setShowOrders(false)}>
                <Drawer.Header>
                    <Drawer.Title>Your Orders</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body style={{ padding:'0px' }}>
                    <Orders handler={ordersTitleHandler} title={ordersTittle} />
                </Drawer.Body>
            </Drawer>
            {/* settings drawer */}
            <Drawer style={{ width:'100%' }} placement="right" open={showSettings} onClose={() => setShowSettings(false)}>
                <Drawer.Header>
                    <Drawer.Title>Profile Settings</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body style={{ padding:'0px' }}>
                    <Settings/>
                </Drawer.Body>
            </Drawer>
        </>
    )
}

export default Dashboard
