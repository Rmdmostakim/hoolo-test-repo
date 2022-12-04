import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";
import swal from "sweetalert";

function Complain({ faMailBulk }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate  = useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Your Complain have Successful", "Continue Shopping", "success");
    navigate.push("/");
  };
  return (
    <>
      <FontAwesomeIcon
        icon={faMailBulk}
        style={{ color: "white", fontSize: "25px" }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ height: "65px", backgroundColor: "rgb(255, 197, 2)" }}
        >
          <Modal.Title>
            <Form
              inline
              className=" d-md-inline ml-auto  my-2 my-md-0 osahan-navbar-search modalHeader"
              onSubmit={handleSubmit}
            >
              <InputGroup>
                <FormControl type="text" placeholder="Write Your Complain"  />
                <InputGroup.Append>
                  <Button
                    type="submit"
                    style={{ color: "white", backgroundColor: "#0e202f" }}
                  >
                    Complain
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Complain;
