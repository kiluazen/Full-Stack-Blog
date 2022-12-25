import React from "react";
import Cardblg from "./Cardblg";
import { Container, Col, Row } from "react-bootstrap";

function HomeCards(){
    return <Container>
            <Row>
                <Col>
                    <Cardblg src="https://media.gettyimages.com/id/1346020796/photo/timoth%C3%A9e-chalamet-is-seen-as-willy-wonka-during-filming-for-the-warner-bros-and-the-roald.jpg?s=612x612&w=0&k=20&c=F39nOU3n-bfzXRwaFCNHlVyEM7mV7m3V1NAv_RIU7as="/>
                </Col>
                <Col>
                    <Cardblg src="https://media.gettyimages.com/id/1420189025/photo/timothee-chalamet-attends-the-bones-and-all-red-carpet-at-the-79th-venice-international-film.jpg?s=612x612&w=0&k=20&c=zU1KFxr9g96VIJ2Ic9vt--L-TbFkgsDRnnYdyMi-MhE=" />
                </Col>
                <Col>
                    <Cardblg src="https://media.gettyimages.com/id/1340125014/photo/co-chair-timoth%C3%A9e-chalamet-attends-the-2021-met-gala-celebrating-in-america-a-lexicon-of.jpg?s=612x612&w=0&k=20&c=-_yWWfmc2kIBwsEO3H5lYGCYvnWkEAY9KCGt9-rlzCc="/>                     
                </Col>
            </Row>
    </Container>
};

export default HomeCards;