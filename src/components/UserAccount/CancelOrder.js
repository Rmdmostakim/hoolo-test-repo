import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBan,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, Table, Button } from "react-bootstrap";
import NullTable from "./NullTable";

function MyCancelOrder(props) {
  const classes = `card text-white bg-danger o-hidden h-100 border-none`;

  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card o-hidden">
          {/* <div className="card-body">

		<div className="card-body-icon">
			<FontAwesomeIcon icon={faBan} fixedWidth />
		</div>
		<div className=" d-flex justify-content-between">
			<b>Cancelled Orders</b> 
			<strong style={{fontWeight:'900'}}> {props.totalCancel ==0 ? 'No Orders': props.totalCancel}</strong> 
		</div>
	</div> */}

          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <a className="text-dark clearfix small z-1">
                <strong>
                  <span className="float-left">
                    Cancelled Orders{" "}
                    {props.totalCancel == 0
                      ? "No Orders"
                      : `( ${props.totalCancel})`}{" "}
                  </span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </a>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <CancelTable
                cancelOrder={props.cancelOrder}
                totalCancel={props.totalCancel}
              />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default MyCancelOrder;

const CancelTable = (props) => {
  return (
    <>
      {props.totalCancel == 0 ? (
        <NullTable name="Cancelled Orders" action="Order" />
      ) : (
        <Table striped bordered hover className="bg-light" size="sm" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Return Payment Mode</th>
              <th>Qunatity</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Invoice</th>
              <th>Return Details</th>
            </tr>
          </thead>

          <tbody>
            {props.cancelOrder.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.user_order_id}</td>
                <td>{product.method_choosen}</td>
                <td>{product.order_quantity}</td>
                <td>{product.amount}</td>
                <td>{product.comment}</td>
                <td>
                  <a
                    href={`https://shop.hulusthul.live/getmyinvoice/${product.order_id}`}
                  >
                    View
                  </a>
                </td>
                <td>
                  <a
                    href={`https://shop.hulusthul.live/view/order/${product.order_id}`}
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
