import * as React from 'react';
import "./container.module.css";
import { header, subtitle, container, joinContainer, buttonCenter, text} from "./container.module.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Container = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    const children = props.children;
    return (
        <Card className={container}>
            <Card.Img variant="overlay" src={bannerImage} />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <Card.Text className={subtitle}>
                        {bannerSubtitle}
                    </Card.Text>
                    <Card.Text className={text}>
                        {children}
                    </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

const JoinContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerImage = props.bannerImage;
    return (
        <Card className={joinContainer}>
            <Card.Img variant="overlay" src={bannerImage}/>
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <div className={buttonCenter}>
                        <Button href="/" variant="outline-primary" size="lg">Join Us</Button>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export {JoinContainer};

export default Container;