import React, { Component } from "react";
import { Card, Button, Dropdown, Modal } from "react-bootstrap";
import axios from "axios";
import SliderImage from "../../Shop/Slide/Slider";
import ModalProductDetails from "./Slide/Slider";

export class ModalDetails extends Component {
  state = {
    productsDetails: [],
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/productdetails/${this.props.id}`)
      .then((res) => {
        this.setState({
          productsDetails: [res.data],
        }); 
      });
  }
  componentDidUpdate() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/productdetails/${this.props.id}`)
      .then((res) => {
        this.setState({
          productsDetails: [res.data],
        });
      });
  }
  render() {
    return (
      <>
        {/* {this.state.productsDetails.map((productsDetails,index) => (
          <Modal
            size="lg"
            show={this.props.show}
            onHide={this.props.onHides}
            aria-labelledby="example-modal-sizes-title-lg"
          key={index}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                <span className="priceLink">
                  {productsDetails.productInfo.map(
                    (info) => JSON.parse(info.product_name).en
                  )}
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ModalProductDetails productsDetails={productsDetails} />
            </Modal.Body>
          </Modal>
        ))} */}
      </>
    );
  }
}

export default ModalDetails;
