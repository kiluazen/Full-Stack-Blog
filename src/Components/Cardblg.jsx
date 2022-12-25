import React from "react";
import { Card, Button } from "react-bootstrap";

function Cardblg(props){
    return  <Card>
                <Card.Img src={props.src}/>
                <Card.Title>
                    Timothee Chalamet
                </Card.Title>
                <Card.Text>
                    I am obsessed with him, the first movie I seen of him is dune..
                </Card.Text>
                <Button bg='primary'>Read More</Button>

            </Card>
};

export default Cardblg;