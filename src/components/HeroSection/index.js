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
                <HeroH1>Ivson Soares Building...</HeroH1>
                <HeroBtnWrapper>
                    <Button to="projects"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                    >
                        Projects {hover ?<ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
          </HeroContainer>
    )
}

export default HeroSection