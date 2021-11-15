import * as React from 'react';
import "./container.module.css";
import { header, subtitle, container, joinContainer, buttonCenter, text,cardBody } from "./container.module.css";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';

const SectionContainer = (props) => {
    const bannerTitle = props.bannerTitle;
    const bannerSubtitle = props.bannerSubtitle;
    const bannerImage = props.bannerImage;
    const children = props.children;
    const imgPos = props.imagePosition;
    let imagePos = (imgPos === undefined) || (['left', 'right'].indexOf(imgPos) === -1) ? undefined : imgPos;
    if (imagePos === 'left') {
        return (
            <Card className={container} >
                <Card.Body className={cardBody}>
                    <Row>
                        <Col sm={6} ><img src={bannerImage} alt=""/></Col>
                        <Col sm={6} >
                            <Card.Title className={header}>{bannerTitle}</Card.Title>
                            <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                            <Card.Text className={text} >{children}</Card.Text>
                            <div className={buttonCenter}> &nbsp;
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        )
    } else if (imagePos === 'right') {
        return (
            <Card className={container}>
                <Card.Body  className={cardBody}>
                    <Row>
                        <Col sm={6} >
                            <Card.Title className={header}>{bannerTitle}</Card.Title>
                            <Card.Text className={subtitle}>{bannerSubtitle}</Card.Text>
                            <Card.Text className={text} >{children}</Card.Text>
                            <div className={buttonCenter}> &nbsp;
                            </div>
                        </Col>
                        <Col sm={6} ><img src={bannerImage} alt="" /></Col>

                    </Row>

                </Card.Body>
            </Card>
        )
    }else {
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
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeoZryrnwLPaHDJF-eywlRHGK7vI7y-bJ4SJwMDIUtLrX9saQ/viewform"  size="lg" target="_blank">Join Us</Button>
                    </div>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}

export { JoinContainer };

export default SectionContainer;
