import React from 'react';
import {Button} from "../ButtonElements";
import {
    InfoRow,
    InfoContainer,
    InfoWrapper,
    TopLine,
    Column1,
    Column2,
    BtnWrap,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from "./InfoElements";

const InfoSection = ({lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         darkText,
                         description,
                         buttonLabel,
                         alt,
                         primary,
                         dark,
                         dark2,
                         image
}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headline}</Heading>
                             <Subtitle darkText={darkText}>{description}</Subtitle>
                             <BtnWrap>
                                 <Button to='home'
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1 : 0}
                                 dark={dark? 1:0}
                                 dark2={dark2? 1:0}
                                 >{buttonLabel}</Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img alt={alt} src={image}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection