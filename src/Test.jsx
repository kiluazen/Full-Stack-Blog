import React, {useState, useEffect} from "react";
import axios from "axios";

function Test(){
   const [posts , setPosts] = useState([]); 
   useEffect( () => {
            const axiosPosts = async () => {
                const res = await axios("http://localhost:8000/blog"); //I always type https for some reason
                setPosts(res.data);
            };
            axiosPosts();
     }, [] );
     console.log(posts);
     return <div>
        {posts.map((post,index)=> {
            return(
            <div key={index}>
                <h1>{post.title}</h1>
                <p>{post.tagline}</p>
            </div>
            );
        }
        )}
        {posts[0].title}
        <p>are you seeing this man I am soooo fucking annoyed rigt now dude</p>
     </div>


};

export default Test;