import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Blgsnip from "../Components/Blgsnip";
import axios from "axios";


function Blog(){
    const [posts,setPosts]= useState([]);
    const url = "http://localhost:8000/blog"
    useEffect ( () => {
        fetch(url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((err)=>{console.log(err);})
    } );

    return  <Container className="bigContainer">
                <h1 className="blgheading">Blog</h1>
                <div className="blgdiv">
                {posts.map((post,index) => {
                    return (
                        <Blgsnip 
                            key= {index}
                            id = {post._id}
                            date = {post.title}
                            title ={post.tagline}
                            time = "3 min read"
                        />
                    )
                }
                )}
                </div>
            </Container>
};

export default Blog;