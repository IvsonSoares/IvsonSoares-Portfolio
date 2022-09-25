import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {homeObjOne, 
        homeObjTwo, 
        homeObjThree, 
        homeObjFour
    } 
from "../components/InfoSection/data";
import Projects from "../components/Projects";
import Footer from "../components/Footer";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection  {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Projects {...homeObjFour}/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
        </>
    );
};

export default Home;