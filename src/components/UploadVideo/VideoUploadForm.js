import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Axios } from "axios";
import axios from "axios";
import React, { Component } from "react";
import { data } from "jquery";

export default class VideoUploadForm extends Component {
  state = {
    store_id: 1,
    store_url: "youtube.com",
    video: null,
    thumbnail: null,
    title: "",
    description: "",
    store_name: "",
    category_name: false,
    category_id: 2,
    trending: false,
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitHandle = (e) => {
    e.preventDefault();

    axios
      .post("https://backend.hulusthul.live/api/vendorvideos", this.state)
      .then((res) => {
        alert("upload okay");
      })
      .catch((error) => {
        alert("error find");
      });
  };
  render() {
    return (
      <>
        <Row>
          <Col lg={12}>
            <div>
              <Form onSubmit={this.onSubmitHandle}>
                <div className="osahan-form  ">
                  <Row>
                    <Col lg={4}>
                      <Form.Group controlId="video-title">
                        <Form.Label>Upload File(Video)</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Enter Your Video Title"
                          name="video"
                          value={this.state.video}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group controlId="video-title">
                        <Form.Label>Upload File(thumbnail)</Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="Enter Your Video Title"
                          name="thumbnail"
                          value={this.state.thumbnail}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={12}>
                      <Form.Group controlId="video-title">
                        <Form.Label>Video Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Video Title"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group controlId="video-description">
                        <Form.Label>Video Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group controlId="video-tags">
                        <Form.Label>Vendor/Store Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Entry Your Name"
                          name="store_name"
                          value={this.state.store_name}
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    {/*	<Col lg={2}>
								<Form.Group controlId="video-privacy">
									<Form.Label>Privacy Settings</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>Public</option>
										<option>Private</option>
										 
									</Form.Control>
								</Form.Group>
							</Col>

						 

							<Col lg={2}>
								<Form.Group controlId="video-license">
									<Form.Label>License</Form.Label>
									<Form.Control
										as="select"
										className="custom-select"
										custom
									>
										<option>Standard</option>
										<option>Copyright Free</option>
										
									</Form.Control>
								</Form.Group>
							</Col>
							<Col lg={2}>
								<Form.Group controlId="video-tags">
									<Form.Label>
										Tags (13 tags remaining)
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Gaming, PS4"
									/>
								</Form.Group>
							</Col>
	*/}
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="main-title">
                        <h6>Category ( you can select upto 1 categories )</h6>
                      </div>
                    </Col>
                  </Row>

                  <Row className="category-checkbox">
                    <Col lg={2} xs={3}>
                      <Form.Check
                        type="checkbox"
                        custom
                        label="Electronic Accessories"
                        id="customCheck1"
                      />
                    </Col>

                    <Col lg={2} xs={3}>
                      <Form.Check
                        type="checkbox"
                        custom
                        label="Fashion and Life Style"
                        id="customCheck3"
                        value={this.state.category_name}
                      />
                    </Col>

                    <Col lg={2} xs={3}>
                      <Form.Check
                        type="checkbox"
                        custom
                        label="Garden Kitchen"
                        id="customCheck4"
                      />
                    </Col>

                    <Col lg={2} xs={3}>
                      <Form.Check
                        type="checkbox"
                        custom
                        label="Health and Beauty"
                        id="customCheck5"
                      />
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className="osahan-area text-center mt-3">
                  <Button variant="outline-primary" type="submit">
                    Uploads
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

function Terms() {
  return (
    <>
      <hr />
      <div className="terms text-center">
        <p className="mb-0">
          There are many variations of passages of Lorem Ipsum available, but
          the majority <a href="#">Terms of Service</a> and{" "}
          <a href="#">Community Guidelines</a>.
        </p>
        <p className="hidden-xs mb-0">
          Ipsum is therefore always free from repetition, injected humour, or
          non
        </p>
      </div>
    </>
  );
}
