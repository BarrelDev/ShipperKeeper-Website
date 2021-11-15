import * as React from 'react';
import Nav from '../components/navbar';
import Container from '../components/container';
import Footer from '../components/footer';
import about_me from '../images/about_me.png';
import our_idea from '../images/our_idea.png'
const AboutPage = () => {
    return (
        <main>
            <Nav pageTitle="About ShipperKeeper"></Nav>
            <body >
                <Container bannerTitle = "Our Story" bannerSubtitle = "The Story of ShipperKeeper" bannerImage={about_me} >
                    <p>
                        I am a freshman in high school, passionate about the local community’s well-being, and am thinking of ways to keep it vibrant. Another thing I’m passionate about is using technology to solve problems. I used to always enjoy going to toy stores and was devastated when each one closed down. Technological advancement doesn’t have to be a detriment to local businesses. Instead, there should be a way to help them. I strongly feel that there is room for all of us to grow & thrive.
                    </p>
                </Container>
                <Container bannerTitle = "Our Idea" imagePosition='right'  bannerImage={our_idea}>
                    <p>
                        The idea of ShipperKeeper is to create a system where online businesses can connect with local businesses. This is a symbiotic relationship: while the online businesses gain a physical presence, the main street businesses get customers. There are benefits for all three parties involved -- e-commerce business, brick & mortar businesses as well as consumers. There are more benefits for the consumers as well, it is safe, convenient as well and helps them to go green by reducing the number of delivery trips. This will be done by allowing consumers to pick up other things that they need when they go to pick up their package.
                    </p>
                </Container>
            </body>
            <Footer></Footer>
        </main>
    )
}

export default AboutPage;
