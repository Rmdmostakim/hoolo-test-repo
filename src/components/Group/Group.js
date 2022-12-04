import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SubscriptionChannelCard from "./SubscriptionChannelCard";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Modal } from "react-bootstrap";
import Login from "../Auth/LoginOld";
// import swal from "sweetalert";

export class Group extends Component {
  state = {
    group: [],
    isloading: false,
    creategroup: false,
    name: "",
    description: "",
    hashtag: "",
    image: null,
    admin: localStorage.getItem("id"),
    status: 1,
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/groups`)

      .then((res) => {
        this.setState({
          group: res.data,
          isloading: true,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const createGroup = {
      name: this.state.name,
      description: this.state.description,                                                                                                          
      hashtag: this.state.hashtag,
      image: this.state.image,
      admin: this.state.admin,
      status: 1,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/groups`, createGroup)
      .then((res) => {
        if (res.data.status == 200) {
          // swal("Success", "Comment has been post Successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
    this.setState({
      name: "",
      description: "",
      hashtag: "",
      image: "",
      admin: null,
      status: 1,
    });
    console.log(createGroup)
  };
  render() {
    const userId = localStorage.getItem("id");
    return (
      <>
        {this.state.isloading ? (
          <ContentWrapper>
            <Container fluid className="mt-5">
              <div className="video-block section-padding">
                <Row>
                  <Col md={12} className="groupHeader">
                    <p>Groups</p>
                    <p
                      type="button"
                      onClick={() => this.setState({ creategroup: true })}
                    >
                      Create Group{" "}
                    </p>
                  </Col>

                  {this.state.group.map((store, index) => (
                    <Col md={3} sm={12} className="mb-3" key={store.id}>
                      <SubscriptionChannelCard store={store} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
            <ThinFooter />
          </ContentWrapper>
        ) : (
          <PreLoader />
        )}

        <Modal
          size="lg"
          show={this.state.creategroup}
          onHide={() => this.setState({ creategroup: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          {userId ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Create Group
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Group controlId="comment-author-email">
                        {/* <Form.Label>
                                 Review <span className="text-danger">*</span>
                             </Form.Label> */}

                        <Form.Control
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChangeHandler}
                          placeholder="Group Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Group controlId="comment-author-email">
                        <Form.Control
                          type="text"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChangeHandler}
                          placeholder="Group Description"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Group controlId="comment-author-email">
                        {/* <Form.Label>
                                 Review <span className="text-danger">*</span>
                             </Form.Label> */}

                        <Form.Control
                          type="text"
                          name="hashtag"
                          value={this.state.hashtag}
                          onChange={this.onChangeHandler}
                          placeholder="Group Hashtag"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Group controlId="comment-author-email">
                        {/* <Form.Label>
                                 Review <span className="text-danger">*</span>
                             </Form.Label> */}

                        <Form.Control
                          type="file"
                          name="image"
                          value={this.state.image}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="success" size="sm" type="submit">
                    Create
                  </Button>
                </Form>
              </Modal.Body>{" "}
            </>
          ) : (
            <Login />
          )}
        </Modal>
      </>
    );
  }
}

export default Group;
