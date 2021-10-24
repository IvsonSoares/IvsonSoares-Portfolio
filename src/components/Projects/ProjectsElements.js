import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  align-items: center;
  background: #010606;
  
  @media screen and (max-width: 760px) {
   height: 1100px;
  }
  
  @media screen and (max-width: 480px) {
   height: 1300px;
  }  
`;

export const ProjectsInfoContainer = styled.div`
color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width: 760px) {
  }
`;

export const ProjectsInfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 350px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
//padding: 0 24px;
justify-content: left;     
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 64px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem; 
  } 
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
    
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }  
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3 px rgba(0,0,0,0.2);
  
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsIconLink = styled.a`
  color: #fff;
`





