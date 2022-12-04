import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faWalking } from "@fortawesome/free-solid-svg-icons";
import NullTable from "./NullTable";

function GoLive(props) {
  const classes = `card text-white bg-success o-hidden h-100 border-none`;

  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card o-hidden">
          {/* <div className="card-body">
						<div className="card-body-icon">
							<FontAwesomeIcon icon={faWalking} fixedWidth />
						</div>
						<div className="mr-5">
                        <b>Following</b>    
						</div>
					</div> */}
          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left"><img src='/img/signout.png' alt='hoolo' /> Go Live</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <MyChatTable
                orders={props.orders}
                totalOrders={props.totalOrders}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default GoLive;

function MyChatTable(props) {
  return (
    <>
      <NullTable name="Live " />
    </>
  );
}
