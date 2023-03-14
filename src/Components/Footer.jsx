import React from "react";

function Footer(){
    const date= new Date();
    let year = date.getFullYear();

    return  <div className="footerDiv">
            <footer className="footer">
                <p>copyright@ {year}</p>
            </footer>
            </div>
};

export default Footer;