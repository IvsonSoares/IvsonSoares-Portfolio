import React from "react";
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink

} from "../../../../website/src/components/Navbar/NavbarElements";


const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Home</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about" >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects" >Projects</NavLinks>
                      </NavItem>
                      {/*    <NavItem>*/}
                      {/*    <NavLinks to="services" onClick={toggle}>Services</NavLinks>*/}
                      {/*</NavItem>*/}
                          <NavItem>
                          <NavLinks to="seeMore" >More</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/sign" >Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar