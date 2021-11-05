import * as React from 'react';
import "./container.module.css";
import { header, subtitle, container, joinContainer, buttonCenter, text, greenBg } from "./container.module.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';

const Container = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    const children = props.children;
    const imgPos = props.imagePosition;
    let imagePos = (imgPos == undefined)|| (['left','right'].indexOf(imgPos)==-1)? 'left': imgPos;
    if (imagePos === 'left') {
        return (
            <Card className={container} >
                {/* <Card.Img variant="overlay" src={bannerImage} style={{ 'opacity': 1 }} /> */}
                {/* <Card.ImgOverlay> */}
                <Card.Body className={greenBg}>
                    <Row>
                        <Col sm={4} ><img src={bannerImage} /></Col>
                        <Col sm={8} >
                            <Card.Title className={header}>{bannerTitle}</Card.Title>
                            <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                            <Card.Text className={text} >{children}</Card.Text>
                            <div className={buttonCenter}>
                                <Button href="/" variant="link" size="lg"> More >> </Button>
                            </div>
                        </Col>
                    </Row>
    
                </Card.Body>
                {/* </Card.ImgOverlay> */}
            </Card>
        )
    } else {
        return (
            <Card className={container}>
                {/* <Card.Img variant="overlay" src={bannerImage} style={{ 'opacity': 1 }} /> */}
                {/* <Card.ImgOverlay> */}
                <Card.Body>
                    <Row>
                        
                    <Col sm={8} >
                        <Card.Title className={header}>{bannerTitle}</Card.Title>
                        <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                        <Card.Text className={text} >{children}</Card.Text>
                        <div className={buttonCenter}>
                            <Button href="/" variant="link" size="lg"> More >> </Button>
                        </div>
                    </Col>
                    <Col sm={4} ><img src={bannerImage} /></Col>
                    
                    </Row>
    
                </Card.Body>
                {/* </Card.ImgOverlay> */}
            </Card>
        )
    }
}

const JoinContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    return (
        <Card className={joinContainer}>
            <Card.Img variant="overlay" src={bannerImage} />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title className={header}>{bannerTitle}</Card.Title>
                    <Card.Text className={subtitle}>
                        {bannerSubtitle}
                    </Card.Text>
                    <div className={buttonCenter}>
                        <Button href="/" variant="primary" size="lg">Learn More</Button>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export { JoinContainer };

export default Container;
