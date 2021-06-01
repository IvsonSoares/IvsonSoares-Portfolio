import React from "react";
import Icon1 from '../../images/game0.jpg'
import Icon2 from '../../images/game.png'
import Icon3 from '../../images/moon.svg'
import {ProjectsContainer,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsIconLink
} from "./ProjectsElements";

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/Game1/" target="_blank">
                        <ProjectsIcon src={Icon1} />
                        </ProjectsIconLink>
                        <ProjectsH2>Construct Game </ProjectsH2>
                        <ProjectsP>Try it and enjoy</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIconLink href="//ivsonsoares.github.io/WhatIsit/" target="_blank">
                        <ProjectsIcon src={Icon2} />
                        </ProjectsIconLink>
                        <ProjectsH2>Processing Art Generation</ProjectsH2>
                        <ProjectsP>Try it and enjoy</ProjectsP>
                    </ProjectsCard>
                        <ProjectsCard>
                        <ProjectsIcon src={Icon3}/>
                        <ProjectsH2>Window Project</ProjectsH2>
                        <ProjectsP>Try it and enjoy</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects