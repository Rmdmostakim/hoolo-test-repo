import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Success = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<Row>
					<Col md={8} className="mx-auto text-center pt-4 pb-5">
						<div>
							<img
								alt="order-success"
								src="/img/order-success.png"
								className="img-fluid"
								style={{maxWidth:'400px'}}
							/>
						</div>
						<h1>Your order has been placed successfully</h1>
						{/* <p className="land">
							Unfortunately the page you are looking for has been
							moved or deleted.
						</p> */}
						<div className="mt-5">
							<Link to="/">
								<Button as="a" variant="btn btn-success">
									Back to Shoppting
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</ContentWrapper>
	);
};

export default Success;
