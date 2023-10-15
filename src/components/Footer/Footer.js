import React from "react";
import { SocialsLink, Wrapper, Text, ButtonsWrapper } from "./Footer.style";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedInIcon";

function Footer() {
  return (
    <Wrapper>
      <p>LOGO</p>
      <Text>Living, learning, & leveling up one day at a time.</Text>
      <ButtonsWrapper>
        <SocialsLink>
          <GithubIcon />
        </SocialsLink>
        <SocialsLink>
          <LinkedinIcon />
        </SocialsLink>
      </ButtonsWrapper>

      <Text>Created by Tomasz Bielicki</Text>
    </Wrapper>
  );
}

export default Footer;
