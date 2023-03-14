import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Specblg(){
    let {id} = useParams();
    const [posts,setPosts] = useState();
    const url = "http://localhost:8000/blog/"+ id;
    
    useEffect(()=>{
        async function fetchData() {
            const res = await axios.get(url);
            const reqData = await res.data;
            const encodedData = reqData.replace()
            setPosts(reqData);
        }
        fetchData();

        });

// there is a bug here unlessrendered twice this is not going to be defined I mean assigned the value, So much shit went down here
    return  <div className="blgContent">
            {posts?.map((p)=>{
                return(
                    <div key = {p._id}>   {/*   I don't know why can't use the map funciton here.because it says can read the undefined. */}
                    <h1>{p.title}</h1>
                    <p>{p.tagline}</p>
                    <h2>{p.heading1}</h2>
                    <p>{p.paragraph1}</p>
                    <h2>{p.heading2}</h2>
                    <p>{p.paragraph2}</p>
                </div>
                        );
                    })
            }
            </div>

};

export default Specblg;