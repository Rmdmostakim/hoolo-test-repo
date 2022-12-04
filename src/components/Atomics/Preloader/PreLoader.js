import React from 'react';
import { Link } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function PreLoader() {
    return (
        <>
            	<ContentWrapper style={{backgroundColor:'black'}}>
                
			<Container fluid>
				<Row>
					<Col md={8} className="mx-auto text-center pt-4 pb-5" style={{position:'relative',height:'100vh'}}>
						<h1 style={{position:'absolute',margin:'0',left:'50%',top:'40%',transform:'translate(-50%,-50%'}}>
							<img
								alt="hulusthul"
								src="/img/logo.png"
								className="img-fluid"
							/>
						</h1>
						 
						 
					</Col>
				</Row>
			</Container>
		</ContentWrapper>
        </>
    )
}

export default PreLoader
