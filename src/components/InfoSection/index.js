import React from 'react';
import {
    InfoRow,
    InfoContainer,
    InfoWrapper,
    TopLine,
    Column1,
    Column2,
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
                         alt,
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