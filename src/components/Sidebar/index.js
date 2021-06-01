import React from "react";
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarLink,
        SidebarMenu,
        SidebarRoute,
        SidebarWrapper,
        SideBtnWrap

} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about">
                            About
                        </SidebarLink>
                        <SidebarLink to="projects">
                            Projects
                        </SidebarLink>
                        <SidebarLink to="seeMore">
                            More
                        </SidebarLink>
                        <SidebarLink to="signup">
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar