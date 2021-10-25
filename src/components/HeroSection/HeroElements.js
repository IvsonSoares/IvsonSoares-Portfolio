import styled from "styled-components";
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/all";

export const HeroContainer = styled.div`
  background: #010606;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-top: 200px;
  height: 800px;
  position: relative;
  z-index: 2;

  :before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.4) 0%,
            rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.7) 100%,
            transparent 50%);
            z-index: 0;
    }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  border-radius: 40%;
  padding-right: 0;
  border: 3px solid #8532b8;
`;

export const Video = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: -1;
 
`;

