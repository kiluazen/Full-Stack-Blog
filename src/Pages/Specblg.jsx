import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Specblg(){
    let {id} = useParams();
    const [posts,setPosts] = useState();
    
    useEffect(()=>{
        return (async ()=>{
            const res = await axios.get("http://localhost:8000/blog/" + id);
            let reqPost;
            reqPost = res.data[0];
            // console.log(reqPost);
            setPosts(reqPost);
        })

    });
     //there is a bug here unlessrendered twice this is not going to be defined I mean assigned the value, So much shit went down here
    // return  <div>
    //         {posts.map((p)=>{
    //             return(
    //             <div>                  I don't know why can't use the map funciton here.because it says can read the undefined.
    //                 <h1>{p.title}</h1>
    //                 <p>{p.tagline}</p>
    //             </div>
    //                 )
    //     })}
    //         </div>

};

export default Specblg;