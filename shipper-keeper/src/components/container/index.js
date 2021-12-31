import * as React from 'react';
import { isMobile } from "react-device-detect";

import "./container.module.css";
import {
    header, subtitle, container, joinContainer, buttonCenter, text,
    cardBody, containerBlock, containerImg, containerTextLeft
} from "./container.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const SectionContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    const children = props.children;
    const imgPos = props.imagePosition;
    let imagePos = (imgPos === undefined) || (['left', 'right'].indexOf(imgPos) === -1) ? undefined : imgPos;
    if (imagePos === 'left' && !isMobile) {
        return (
            <Card className={container} >
                <Card.Body className={cardBody}>
                    <Row>
                        <Col xs={12} md={6} ><img src={bannerImage} alt="" /></Col>
                        <Col xs={12} md={6} >
                            <div className={containerBlock}>
                            <Card.Title className={header}>{bannerTitle}</Card.Title>
                            <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                            <Card.Text className={text} >{children}</Card.Text>
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        )
    } else if (imagePos === 'right' || isMobile) {
        return (
            <Card className={container}>
                <Card.Body className={cardBody}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className={containerTextLeft}>
                                <Card.Title className={header}>{bannerTitle}</Card.Title>
                                <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                                <Card.Text className={text} >{children}</Card.Text>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className={containerImg}>
                                <img src={bannerImage} alt="" />
                            </div>
                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        )
    } else {
        return (
            <div></div>
        )
    }
}

const JoinContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    // const bannerImage = props.bannerImage;
    // const bannerLink = props.bannerLink;
    return (
        <Card className={joinContainer}>
            {/* <Card.Img variant="overlay" src={bannerImage} /> */}
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <div className={buttonCenter}>
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeoZryrnwLPaHDJF-eywlRHGK7vI7y-bJ4SJwMDIUtLrX9saQ/viewform" size="lg" target="_blank">Join Us</Button>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export { JoinContainer };

export default SectionContainer;
