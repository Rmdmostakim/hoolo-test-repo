import { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./LiveStream.css";
// import swal from "sweetalert";

const Stream = () => {
  return (
    <>
      <ContentWrapper>
        <Container fluid className="liveStream" >
          <Row>
            <Col xl={6} sm={6} xs={12} className="liveStreamContent" >
              <h1 >Start Streaming and Selling!</h1>
              <p>First, please choose what type of Streamer you are</p>
            </Col>

            <Col xl={6} sm={6} xs={12} className="liveStreamImg">
              <img src="img/livestream.png" />
            </Col>
          </Row>
        </Container>
        <Container className="pt-5 mb-5">
          <Row className="liveStreamBodyContent">
            <Col xl={12} sm={12} xs={12}>
            <h1>Streamer Account for BRANDs</h1>
            <h4>Want to grow your Business? Now any Brand can sell their Products within<br/> minutes directly via LIVE Streams!</h4>
            </Col>

            <Col xl={4} sm={6} xs={12}  >
              <h1>Test-1</h1>
            </Col> 
            <Col xl={4} sm={6} xs={12}  >
             <h1>Test-2</h1>
            </Col> 
            
          </Row>
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Stream;
