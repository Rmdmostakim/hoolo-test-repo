import React, { useRef, useState, useEffect } from "react";
import {Row,Col,Button,Container} from "react-bootstrap";
import "./Video.css";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
// import swal from "sweetalert";

export class VideoCase2 extends React.Component {
  state = {
    videoDetails:[]
  };

  componentDidMount() {
    axios.get('https://shop.hoolo.live/api/AllDetails')
    .then(res=>{
      this.setState({
        videoDetails:[res.data]
      })
      console.log(res.data)
    })
  }

  componentDidUpdate() {
    
  }

  render() {
      console.log(this.state.videoDetails)
    return (
      <>
        <Container fluid className="mt-3">
          <div className="video-block section-padding ">
            <Row>
             
                    <Col xl={4} sm={6} className="mt-4">
                    
                    </Col>
                
                
                    <Col xl={4} sm={6} className="mb-3" >
                    
                    </Col>
                
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default VideoCase2;
