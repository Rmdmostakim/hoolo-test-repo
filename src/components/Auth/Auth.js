import { Switch, Route, useNavigate } from "react-router-dom";
import "./Auth.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FourZeroFour from "../FourZeroFour/FourZeroFour";
import Login from "./LoginOld";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import Verification from "./verification";

const Auth = () => {
  const navigate =useNavigate()
 
  return (
    <>
   <Login navigate={navigate}/>
      
    </>
  );
};

export default Auth;
