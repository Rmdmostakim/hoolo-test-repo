import React from "react";
import { Container } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ChildNav from "../Homepage/ChildNav";

function Trending() {
  return (
    <>
      <ChildNav />
      <ContentWrapper>
        <Container fluid className="mt-5">
          <h1>Trending</h1>
        </Container>
      </ContentWrapper>
    </>
  );
}

export default Trending;
