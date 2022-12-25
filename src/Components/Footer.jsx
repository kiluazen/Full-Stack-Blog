import React from "react";

function Footer(){
    const date= new Date();
    let year = date.getFullYear();

    return  <footer className="footer">
                <p>copyright@ {year}</p>
            </footer>
};

export default Footer;