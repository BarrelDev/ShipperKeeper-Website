import * as React from 'react';
import Nav from '../components/navbar';
import Container from '../components/container';
import Footer from '../components/footer';
import "../styles/contact.css";
const ContactPage = () => {
    return (
        <main>
            <Nav pageTitle="About ShipperKeeper"></Nav>
            <body>
                <p>&nbsp</p>
                <Container bannerTitle = "Contact Us" bannerSubtitle = "Have any questions? We'd love to hear them.">
                    <div>
                        <h2>Email: </h2>
                        <a href="mailto:example@shipperkeeper.com">blah@shipperkeeper.com</a>
                    </div>
                </Container>
            </body>
            <Footer></Footer>
        </main>
    )
}

export default ContactPage;
