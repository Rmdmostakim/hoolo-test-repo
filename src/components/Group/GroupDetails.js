import React from "react";
import { Container } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";

function GroupDetails(props) {
  const { name } = useParams();
  return (
    <>
      <ContentWrapper>
        <Container fluid>
          <h4 className="text-center">Welcome To <b style={{color:'red'}}>{name} </b>Group!</h4>
        </Container>
      </ContentWrapper>
    </>
  );
}

export default GroupDetails;
