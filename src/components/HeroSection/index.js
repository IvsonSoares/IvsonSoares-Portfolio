import React from "react";
import {HeroContainer,
        ImgWrap,
        Img

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
                             <Img alt={alt} src={image}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </HeroContainer>
        </>
    )
}

// const HeroSection = () => {

//     return (
//         <HeroContainer>
//             <HeroBg>
//             </HeroBg>
//             <HeroContent>
//             </HeroContent>
//           </HeroContainer>
//     )
// }

export default HeroSection