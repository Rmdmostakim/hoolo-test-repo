import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import pagenotfoundImage from "../pagenotfound.jpg";

const PageNotFound = () => {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);
  return (
    <div className="pageNotFound">
      <h1>Oops.. Page Not Found</h1>
      <p>Looks like you came to wrong page on our server</p>
      <img src={pagenotfoundImage} height="600" width="800" alt="not found" />
      <div className="mt-2">
							<Link to="/">
								<Button as="a" variant="outline-primary">
									GO TO HOME PAGE
								</Button>
							</Link>
						</div>
            <br></br>
            <br></br>
    </div>
  );
};

export default PageNotFound;
