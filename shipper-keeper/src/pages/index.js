import * as React from "react";
import Nav  from '../components/navbar';
import Container from '../components/container';
import Footer from "../components/footer";
import {JoinContainer} from '../components/container';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';

const IndexPage = () => {
  return (
    <main>
        <Nav pageTitle="ShipperKeeper"></Nav>
        <body style={{"backgroundColor":"#606c38ff"}}>
            <p>&nbsp;</p>
            <Container bannerTitle="Shipper Keeper" bannerSubtitle="The future of Online Shipping" bannerImage={banner3} style={{"marginTop":"50px!important"}}>welcome</Container>
            <Container bannerTitle="Our Solution" bannerSubtitle="An API to send shipments to local stores" bannerImage={banner2}></Container>
            <Container bannerTitle="Our Purpose" bannerSubtitle="To grow both online and brick-and-mortar stores" bannerImage={banner1}></Container>
            <JoinContainer bannerTitle="Shipper" bannerSubtitle="Become a" bannerImage={banner3}></JoinContainer>
            <JoinContainer bannerTitle="Keeper" bannerSubtitle="Become a" bannerImage={banner1}></JoinContainer>
        </body>
        <Footer></Footer>
    </main>
  )
}

export default IndexPage
