import React, { useEffect,Component } from "react";
import { Link,useNavigate} from "react-router-dom";
//Firebase library 
import { auth,signInWithGoogle } from "./firebase";
import "./Auth.css";
import { useAuthState } from "react-firebase-hooks/auth";

//Firebase library 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import Carousel from "./Carousel";
import Container from "react-bootstrap/Container";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://shop.hoolo.live/api/users/login", this.state)
      // .post(env.REACT_APP_BASE_URL + "/api/users/login", this.state)

      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.data.id);
       /* this is for comment */
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);

        // swal("Welcome To Hulusthul", "Login Successful", "success");
        this.props.navigate.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  render() {
    const { email, password } = this.state;
   

    return (
      <>
      <section className="login-main-wrapper">
        <Container fluid className="pl-0 pr-0">
        <Row noGutters>
        <Col md={6} className=" p-5 bg-white full-height">
          <div className="login-main-left ">
            <div className="text-center mb-5 login-main-left-header  ">
              <img src="/img/logo.png" className="img-fluid" alt="LOGO" />
              {/* <h5 className="mt-3 mb-3">Welcome to Hulusthul</h5>
          <p>
            It is a long established fact that a reader <br />{" "}
            will be distracted by the readable.
          </p> */}
            </div>
            <Form className="" onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>
                  E-mail <strong style={{ color: "red" }}>*</strong>
                </Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Enter Your E-mail"
                  onChange={this.onChangeHandler}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Password <strong style={{ color: "red" }}>*</strong>{" "}
                </Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                  required
                />
              </Form.Group>
              <div className="mt-4">
                <Row>
                  <Col>
                    <Button
                      
                      className="btn-bg"
                      type="submit"
                      size="lg"
                      block
                    >
                      Sign In
                    </Button>
                  </Col>
                </Row>
              </div>

             
            </Form>
           
            {/* <div className="mt-4">
            <p className="mb-3 or">OR</p>

               <p className="text-center google">
                 <img src="/img/google-icon.png"    />

               <a href="https://shop.hoolo.live/api/users/sign-in/google">
                      Login with Google{" "}
                    </a>
               </p>
             
                
                 
            </div> */}
             <SocialLogin />

            <div className="mt-5 text-center">
            

              <p className="light-gray">
                Don’t have an account? <Link to="/auth/register">Sign Up</Link>
              </p>
            </div>
          </div>
         
        </Col>
          <Carousel />
          </Row>
        </Container>
        </section>
      </>
    );
  }
}

export default Login;


 

function SocialLogin() {
  const [user, loading] = useAuthState(auth);

//this has been changed into usenavigare earlier it was 0
  let history = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
      let createUser={
        email:user.email,
        name:user.displayName,
      }
      axios.post('https://shop.hoolo.live/api/users/firebase',createUser)
      .then(res=>{
        localStorage.setItem("id", res.data.id);
        history.push("/");
      })
      .catch(err=>{
        console.log('this is a gauth user error', err)
      })
      
    };
   
  }, [user, loading,history]);



  //wht it was multiple copied ?  25/5/2022
  // if(user){
  //   let createUser={
  //     email:user.email,
  //     name:user.displayName,
  //   }
  //   axios.post('https://shop.hoolo.live/api/users/firebase',createUser)
  //   .then(res=>{
  //     localStorage.setItem("id", res.data.id);
  //     history.push("/");
  //   })
  //   .catch(err=>{
  //     console.log('this is a gauth user error', err)
  //   })
  // }
  return (
     <>
      <div className="mt-4">
            <p className="mb-3 or">OR</p>

               <p className="text-center google">
                 <img src="/img/google-icon.png"   alt="hoolo" />

               <a   onClick={signInWithGoogle}>
                      Login with Google{" "}
                    </a>
               </p>
             
                
                 
      </div>
     </>
  )
}

 
