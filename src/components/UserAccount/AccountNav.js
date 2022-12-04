import React,{useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';
import {logout} from "../Auth/firebase";
import user  from '../Video/Comments/user.png';
import { useDispatch } from 'react-redux';
import { setProfile,getProfile } from '../../features/ProfileSlice';
import { logoutCart } from "../../features/CartSlice";
export default function MyAccountNav() {
  const {id,name,mobile,address,avatar,social} = useSelector((state)=>state.profile);
  const dispatch = useDispatch();
  const history = useNavigate();
  const Signout = () => {
    logout();
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("avatar");
    localStorage.removeItem("mobile");
    localStorage.removeItem("address");
    dispatch(logoutCart());
    swal("See You Soon", "Singout Successful", "success");
    history("/login",{replace:true});
  };
  const initial = {id,name,mobile,image:null,address};
  const [credentials,setCredentials] = useState(initial);

  useEffect(()=>{
    dispatch(getProfile());
  },[dispatch]);
  return (
    <>
      <div className="userNav">
        <div className="userAvatar">
          <div>{avatar === null ? <img src={user} className="avatar" alt={name}/> : <img src={avatar} className="avatar" referrerPolicy="no-referrer"  alt={name} />}</div>
          <div className="info">
            <div style={{ fontWeight:'bold',color:'#000000' }}>
              {name}
            </div>
          </div>
        </div>
        <div className="">
            <div>
            <img src='/img/signout.png' alt='hoolo' style={{width:'20px'}} />
            <Button className="" variant='none' onClick={Signout}>Logout</Button>
            </div>
          
        </div>
      </div>

    </>
  );
}