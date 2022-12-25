import React from "react";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Specblg from "./Pages/Specblg";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import { Container } from "react-bootstrap";

function App(){
    return  <Router>
                <Container className="firstContainer">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog/:id"  element={<Specblg />}/>
                </Routes>
                <Footer />
                </Container>
            </Router>          
};

export default App;