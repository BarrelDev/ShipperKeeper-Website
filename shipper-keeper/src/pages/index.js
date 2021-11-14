import * as React from "react";
import Nav  from '../components/navbar';
import Container from '../components/container';
import Footer from "../components/footer";
import {JoinContainer} from '../components/container';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import { shipper_keeper, our_solution, our_purpose } from '../static/static_index';
import "../styles/index.css";

const IndexPage = () => {
  
  return (
    <main>
        <Nav pageTitle="ShipperKeeper"></Nav>
        <body>
            <p>&nbsp</p>
            <Container imagePosition='left' bannerTitle="Shipper Keeper" bannerSubtitle="The future of Online Shipping" children={shipper_keeper} bannerImage={banner3} bannerLink="about"></Container>
            <Container imagePosition='right' bannerTitle="Our Solution" bannerSubtitle="A tight technology mesh between the consumer, the online and local merchants" children={our_solution} bannerImage={banner2}></Container>
            <Container imagePosition='left' bannerTitle="Our Purpose" bannerSubtitle="To revive and thrive the local economy" children={our_purpose} bannerImage={banner1} ></Container>
            <JoinContainer bannerTitle="Shipper" bannerImage={banner3}></JoinContainer>
            <JoinContainer bannerTitle="Keeper" bannerImage={banner1}></JoinContainer>
        </body>
        <Footer></Footer>
    </main>
  )
}

export default IndexPage
