import * as React from "react";
import Nav from '../components/navbar';
import SectionContainer from '../components/container';
import Footer from "../components/footer";
import { JoinContainer } from '../components/container';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import banner1 from '../images/card_pay.jpg';
import banner2 from '../images/packages.jpg';
import banner3 from '../images/package2.jpg';
import { shipper_keeper, our_solution, our_purpose } from '../static/static_index';
import "../styles/index.css";

const IndexPage = () => {

  return (
    <main>
      <Nav pageTitle="ShipperKeeper"></Nav>
      <div><Row><br /><br /></Row></div>
      <section className="container-fluid alignCenter clearfix  section-1">
        <h1 class="title-text ">ShipperKeeper.com</h1>
        <p class="subtext" spellcheck="false"> The future of Online Shipping</p>
      </section>
      <section>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={12} className="greenBg">
              <SectionContainer imagePosition='left' 
                bannerTitle="Who we are" 
                bannerSubtitle="The future of Online Shipping" 
                children={shipper_keeper} bannerImage={banner3} 
                bannerLink="about"
                ></SectionContainer>
            </Col>
            <Col xs={12} lg={12}>
              <SectionContainer imagePosition='right' bannerTitle="Our Solution" bannerSubtitle="A tight technology mesh between the consumer, the online and local merchants" children={our_solution} bannerImage={banner2}></SectionContainer>
            </Col>
            <Col xs={12} lg={12}  className="greenBg">
              <SectionContainer imagePosition='left' bannerTitle="Our Purpose" bannerSubtitle="To revive and thrive the local economy" children={our_purpose} bannerImage={banner1} ></SectionContainer>
            </Col>

            <Col xs lg="3">
              <JoinContainer bannerTitle="Shipper" ></JoinContainer>
            </Col>
            <Col xs lg="3">
              <JoinContainer bannerTitle="Keeper" ></JoinContainer>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer></Footer>
    </main>
  )
}

export default IndexPage
