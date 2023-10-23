import React from "react";
import {
  SocialsLink,
  Wrapper,
  Text,
  ButtonsWrapper,
  LogoWrapper,
} from "./Footer.style";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedInIcon";

function Footer() {
  return (
    <Wrapper>
      <LogoWrapper>
        <p>LOGO</p>
        <Text>Living, learning, & leveling up one day at a time.</Text>
      </LogoWrapper>

      <ButtonsWrapper>
        <a
          href="https://github.com/TomaszBielicki"
          target="_blank"
          rel="noreferrer"
        >
          <SocialsLink>
            <GithubIcon />
          </SocialsLink>
        </a>

        <a
          href="https://www.linkedin.com/in/tomasz-bielicki-b7703319b/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialsLink>
            <LinkedinIcon />
          </SocialsLink>
        </a>
      </ButtonsWrapper>

      <Text>Created by Tomasz Bielicki</Text>
    </Wrapper>
  );
}

export default Footer;
