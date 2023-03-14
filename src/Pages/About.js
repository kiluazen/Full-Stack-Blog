import React,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";


function About(){

    const [posts,setPosts]= useState([]);
    const url = "http://localhost:8000/about";

    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(url);
            const reqData = res.data;
            setPosts(reqData);
        }
        fetchData();
    });

    return  <Container className="aboutContent">
                {posts?.map((p)=>{
                    return <div >
                        <h2>{p.title}</h2>
                        <p>{p.tagline}</p>
                        <p>{p.paragraph1}</p>
                        <p>{p.paragraph2}</p>
                    </div>
                })
                }
            </Container>
};

export default About;