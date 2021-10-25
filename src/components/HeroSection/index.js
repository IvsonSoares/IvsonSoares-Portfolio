import React from "react";
import video from "../../video/video.mp4";
import {HeroContainer,
        ImgWrap,
        Img,
        HeroBg,
        Video

} from "./HeroElements";


import {
    InfoRow,
    InfoWrapper,
    TopLine,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
} from "../InfoSection/InfoElements";

const HeroSection = ({lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         darkText,
                         description,
                         alt,
                         image
}) => {
    return (
        <>
        <HeroContainer lightBg={lightBg} id={id}>
            <HeroBg>
                <Video autoPlay loop muted src={video} type="video/mp4" /> 
            </HeroBg>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headline}</Heading>
                             <Subtitle darkText={darkText}>{description}</Subtitle>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img alt={alt} src={image} />
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </HeroContainer>
        </>
    )
}

export default HeroSection