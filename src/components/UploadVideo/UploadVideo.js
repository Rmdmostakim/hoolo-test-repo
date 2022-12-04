import "./UploadVideo.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { HeadingWrapper } from "../Atomics/SectionHeader/SectionHeader";

import VideoUploadForm from "./VideoUploadForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const UploadVideo = () => {
  return (
    <>
      <ContentWrapper>
        <Container fluid className="upload-details">
          <Row>
            <Col lg={12}>
              <HeadingWrapper heading="Upload Details" />
            </Col>
          </Row>
          <hr />

          <VideoUploadForm />
        </Container>
        <ThinFooter />
      </ContentWrapper>
    </>
  );
};

export default UploadVideo;
