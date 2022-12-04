import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThinFooter from "../Footer/ThinFooter";
import SingleHeader from "../Atomics/SectionHeader/SingleSectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import SubscriptionChannelCard from "../Atomics/SubscriptionChannelCard/SubscriptionChannelCard";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";

export class Subscriptions extends Component {
  state = {
    stores: [],
    isloading: false,
  };
  componentDidMount() {
    axios
      .get("https://shop.hoolo.live/api/allstores")

      .then((res) => {
        this.setState({
          stores: res.data,
          isloading: true,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }
  render() {
    return (
      <>
        {this.state.isloading ? (
          <ContentWrapper>
            <Container fluid>
              <div className="video-block section-padding">
                <Row>
                  <Col md={12}>
                    
                    <SingleHeader heading="All Store List" />
                  </Col>

                  {this.state.stores.map((store) => (
                    <Col xl={3} sm={6} xs={6} className="mb-3" key={store.id}>
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
      </>
    );
  }
}

export default Subscriptions;
