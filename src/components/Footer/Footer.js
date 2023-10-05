import React from "react";
import { SocialsLink, Wrapper, Text } from "./Footer.style";

function Footer() {
  return (
    <Wrapper>
      <Text>Living, learning, & leveling up one day at a time.</Text>
      <SocialsLink>LIN</SocialsLink>
      <SocialsLink>GHub</SocialsLink>
      <Text>Created by Tomasz Bielicki</Text>
    </Wrapper>
  );
}

export default Footer;
