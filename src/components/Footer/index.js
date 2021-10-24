import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/all";
import {animateScroll as scroll} from 'react-scroll'
import {FooterWrap,
    FooterContainer,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink

} from "./FooterElements";

const scrollTop = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/react-website/" onClick={scrollTop}>
                            Home
                        </SocialLogo>
                        <SocialIcons>
                           <SocialIconLink href="//www.facebook.com/ivson.soares.98" target="_blank"
                            aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="//www.instagram.com/ivsonferreirajr/" target="_blank"
                            aria-label="Instagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="//www.linkedin.com/in/ivson-soares-b36b07208/" target="_blank"
                            aria-label="Linkedin">
                               <FaLinkedin/>
                           </SocialIconLink>
                           <SocialIconLink href="//twitter.com/soares_ivson?lang=en" target="_blank"
                            aria-label="Twitter">
                               <FaTwitter/>
                           </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer