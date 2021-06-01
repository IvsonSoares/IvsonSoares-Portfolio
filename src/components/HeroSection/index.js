import React, {useState} from "react";
import logo from "../../images/background.jpg"
import {Button} from "../ButtonElements";
import {HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroBtnWrapper,
        ArrowRight,
        ArrowForward,


} from "./HeroElements";
import HeroParticles from "./HeroParticles";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg  src={logo}/>
            </HeroBg>
            <HeroBg>
                <HeroParticles />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ivson Soares Website</HeroH1>
                <HeroBtnWrapper>
                    <Button to="/projects" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Projects {hover ?<ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
          </HeroContainer>
    )
}

export default HeroSection