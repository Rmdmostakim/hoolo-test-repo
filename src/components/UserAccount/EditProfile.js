import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./MyAccount.css";
import Time from "react-time-format";

function EditProfile(props) {
  const {userinfo,address} = props;
  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card  bg o-hidden ">
          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <div className="text-dark clearfix small z-1">
                <strong>
                <span className="float-left"><img src='/img/details.png' alt='hoolo' /> Account Details</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
            <Card  style={{ width: "100%" }} bg="info">
            <Card.Img
              variant="top"
              alt="hulusthul"
              src={`https://shop.hoolo.live/images/user/${userinfo.image}`}
            />
            <Card.Body>
              <Card.Title>{userinfo.name}</Card.Title>
              <Card.Text>
                <strong> Member Since: </strong>{" "}
                <Time value={userinfo.created_at} format="DD-MM-YYYY" />
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush textSize">
            <ListGroupItem>
            <strong className="text-info">Address: </strong>{" "}
            { address && `${address.address}, ${address.state_name},${address.city_name}, ${address.country_name} `}
          </ListGroupItem>
              <ListGroupItem>
                <strong className="text-info">Email: </strong> {userinfo.email}{" "}
              </ListGroupItem>
              <ListGroupItem>
                <strong className="text-info">Mobile: </strong>{" "}
                {`+880${userinfo.mobile}`}{" "}
              </ListGroupItem>
              <ListGroupItem>
                <strong className="text-info">User Role: </strong>{" "}
                {userinfo.role_id === `u` ? "User" : "Vendor"}{" "}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link
                href="/my-account"
                className="btn btn-light btn-sm float-right"
              >
                Edit Profile
              </Card.Link>
            </Card.Body>
          </Card>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

const UserTable = (props) => {
  return (
    <>
      {props.userinfo.map((user, index) => (
        <Card  style={{ width: "100%" }} bg="info" key={index}>
          <Card.Img
            variant="top"
            alt="hulusthul"
            src={`https://shop.hoolo.live/images/user/${user.image}`}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <strong> Member Since: </strong>{" "}
              <Time value={user.created_at} format="DD-MM-YYYY" />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush textSize">
            {props.address.map(
              ( address,index) => (
                <ListGroupItem key={index}>
                  <strong className="text-info">Address: </strong>{" "}
                  {`${address.address}, ${address.state_name},${address.city_name}, ${address.country_name} `}
                </ListGroupItem>
              )
            )}
            <ListGroupItem>
              <strong className="text-info">Email: </strong> {user.email}{" "}
            </ListGroupItem>
            <ListGroupItem>
              <strong className="text-info">Mobile: </strong>{" "}
              {`+880${user.mobile}`}{" "}
            </ListGroupItem>
            <ListGroupItem>
              <strong className="text-info">User Role: </strong>{" "}
              {user.role_id === `u` ? "User" : "Vendor"}{" "}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href="https://shop.hulusthul.live/profile"
              className="btn btn-light btn-sm float-right"
            >
              Edit Profile
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
