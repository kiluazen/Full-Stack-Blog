import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Intro() {
    return  <Container className="introbox">
                <Row>
                    <Col>
                        <div className="intro">
                            <h2>Hey People :)</h2>
                            
                            <p>I am Kushal, A Under Graduate in IIT Bombay </p>
                            <p>I am studing Aerospace Engineering, '24 graduat batch</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat efficitur erat non faucibus.
                                Aliquam ullamcorper diam non condimentum tristique. Maecenas eu sem a nisi porta aliquam.
                                Fusce ut lorem id nisl tempor varius eu ut metus. Pellentesque gravida at ante non sodales.</p>
                             
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://media.gettyimages.com/id/645734328/photo/model-actress-emily-ratajkowski-attends-the-2017-vanity-fair-oscar-party-hosted-by-graydon.jpg?s=612x612&w=0&k=20&c=_evOhVLK7VniF5Vd4IRBl6GrxeMZW96AOMUc1-yq5Io=" ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
};

export default Intro;