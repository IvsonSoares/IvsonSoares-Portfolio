import React from "react";
import Icon1 from '../../images/game0.jpg'
import Icon2 from '../../images/game.png'
import Icon3 from '../../images/project3.jpeg'
import Icon4 from '../../images/pendulodeNewton.png'
import Icon5 from '../../images/calculator.png'
import Icon6 from '../../images/systemJava.png'
import Icon7 from '../../images/twint.png'
import Icon8 from '../../images/weatherVue.png'

import {
    InfoRow,
    TopLine,
    Column1,
    TextWrapper,
    Heading,
    Subtitle
} from "../InfoSection/InfoElements";

import {ProjectsContainer,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsIconLink,
    ProjectsInfoContainer,
    ProjectsInfoWrapper
} from "./ProjectsElements";

const Projects = ({id,
    topLine,
    lightText,
    headline,
    darkText,
    description}) => {

    return (
        <>
        <ProjectsInfoContainer id = {id}>
            <ProjectsInfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                        <ProjectsH1>
                         <TopLine>{topLine}</TopLine>   
                        </ProjectsH1>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>  
                </InfoRow>    
            </ProjectsInfoWrapper>
        </ProjectsInfoContainer>
            <ProjectsContainer> 
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/Game-Construct/" target="_blank">
                        <ProjectsIcon src={Icon1} />
                        </ProjectsIconLink>
                        <ProjectsH2>Simple Game Construct </ProjectsH2>
                        <ProjectsP>Try it</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/Arte_Generativa-Curvas-Bezier/" target="_blank">
                        <ProjectsIcon src={Icon2} />
                        </ProjectsIconLink>
                        <ProjectsH2>Art Generator JS</ProjectsH2>
                        <ProjectsP>Try it</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/IvsonSoares/PetShop-react/" target="_blank">
                        <ProjectsIcon src={Icon3}/>
                        </ProjectsIconLink>
                        <ProjectsH2>PetShop React.Js</ProjectsH2>
                        <ProjectsP>Repository</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/IvsonSoares/Pendulo_de_Newton_Pov-ray/" target="_blank">
                        <ProjectsIcon src={Icon4}/>
                        </ProjectsIconLink>
                        <ProjectsH2>Pendulo de Newton Pov-Ray</ProjectsH2>
                        <ProjectsP>Repository</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/IvsonSoares/Simple_Calculator_Python/" target="_blank">
                        <ProjectsIcon src={Icon5}/>
                        </ProjectsIconLink>
                        <ProjectsH2>Simple Python Calculator</ProjectsH2>
                        <ProjectsP>Repository</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="" target="_blank">
                        <ProjectsIcon src={Icon6}/>
                        </ProjectsIconLink>
                        <ProjectsH2>Simple E-commerce Java</ProjectsH2>
                        <ProjectsP>In Progress</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/IvsonSoares/TwintAnalyzer/" target="_blank">
                        <ProjectsIcon src={Icon7}/>
                        </ProjectsIconLink>
                        <ProjectsH2>Data Analysis with Python</ProjectsH2>
                        <ProjectsP>Repository</ProjectsP>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/IvsonSoares/WeatherApp/" target="_blank">
                        <ProjectsIcon src={Icon8}/>
                        </ProjectsIconLink>
                        <ProjectsH2>Weather App in Vue.js</ProjectsH2>
                        <ProjectsP>Repository</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects