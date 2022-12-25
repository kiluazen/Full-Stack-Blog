    import React from "react";

    function Blgsnip(props){
        return  <a className="blgLink" href= {"/blog/" + props.id }>
                <div className="blgSite">
                
                    <div className="blgDate">
                        <div className="blgMonth">{props.date}</div>
                    </div>
                    <h3 >{props.title}</h3>
                    <div className="blgTime">{props.time}</div>
                </div>
                </a>
    };

    export default Blgsnip;