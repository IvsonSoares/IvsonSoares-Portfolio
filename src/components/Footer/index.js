import React from "react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/all";
import {FooterWrap,
    // FooterLink,
    // FooterLinksContainer,
    // FooterLinkItems,
    // FooterLinksWrapper,
    // FooterLinkTitle,
    FooterContainer,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    WebsiteRights

} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                {/*<FooterLinksContainer>*/}
                {/*    <FooterLinksWrapper>*/}
                {/*        <FooterLinkItems>*/}
                {/*            <FooterLinkTitle> Social Media</FooterLinkTitle>*/}
                {/*                <FooterLink to="/signin">Instagram</FooterLink>*/}
                {/*                <FooterLink to="/signin">Facebook</FooterLink>*/}
                {/*                <FooterLink to="/signin">Linkedin</FooterLink>*/}
                {/*                <FooterLink to="/signin">GitHub</FooterLink>*/}
                {/*        </FooterLinkItems>*/}
                {/*        <FooterLinkItems>*/}
                {/*            <FooterLinkTitle> About Us</FooterLinkTitle>*/}
                {/*                <FooterLink to="/signin">How it works</FooterLink>*/}
                {/*                <FooterLink to="/signin">Testimonials</FooterLink>*/}
                {/*                <FooterLink to="/signin">Investors</FooterLink>*/}
                {/*                <FooterLink to="/signin">Terms of services</FooterLink>*/}
                {/*        </FooterLinkItems>*/}
                {/*    </FooterLinksWrapper>*/}
                {/*        <FooterLinksWrapper>*/}
                {/*        <FooterLinkItems>*/}
                {/*            <FooterLinkTitle> About Us</FooterLinkTitle>*/}
                {/*                <FooterLink to="/signin">How it works</FooterLink>*/}
                {/*                <FooterLink to="/signin">Testimonials</FooterLink>*/}
                {/*                <FooterLink to="/signin">Investors</FooterLink>*/}
                {/*                <FooterLink to="/signin">Terms of services</FooterLink>*/}
                {/*        </FooterLinkItems>*/}
                {/*        <FooterLinkItems>*/}
                {/*            <FooterLinkTitle> About Us</FooterLinkTitle>*/}
                {/*                <FooterLink to="/signin">How it works</FooterLink>*/}
                {/*                <FooterLink to="/signin">Testimonials</FooterLink>*/}
                {/*                <FooterLink to="/signin">Investors</FooterLink>*/}
                {/*                <FooterLink to="/signin">Terms of services</FooterLink>*/}
                {/*        </FooterLinkItems>*/}
                {/*    </FooterLinksWrapper>*/}
                {/*</FooterLinksContainer>*/}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Home
                        </SocialLogo>
                        <WebsiteRights>Portfolio </WebsiteRights>
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