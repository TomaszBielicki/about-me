import React from "react";
import { SocialsLink, Wrapper, Text, ButtonsWrapper } from "./Footer.style";

function Footer() {
  return (
    <Wrapper>
      <p>LOGO</p>
      <Text>Living, learning, & leveling up one day at a time.</Text>
      <ButtonsWrapper>
        <SocialsLink>LIN</SocialsLink>
        <SocialsLink>GHub</SocialsLink>
      </ButtonsWrapper>

      <Text>Created by Tomasz Bielicki</Text>
    </Wrapper>
  );
}

export default Footer;
