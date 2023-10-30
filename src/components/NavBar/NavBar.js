import React from "react";
import {
  Wrapper,
  Title,
  Text,
  AvatarWrapper,
  ImgWrapper,
  DeskImg,
  MainPageWrapper,
} from "./NavBar.style";

function NavBar() {
  return (
    <>
      <Wrapper id="1">
        <MainPageWrapper>
          <Title>Designer, Frontend Developer</Title>
          <Text>
            I design and code beautifully simple things, and I love what I do.
          </Text>
          <AvatarWrapper>
            <img
              src="https://mattfarley.ca/img/mf-avatar.svg"
              alt="avatarImg"
            />
          </AvatarWrapper>
          <ImgWrapper>
            <DeskImg
              src="https://mattfarley.ca/img/hero-devices.svg"
              alt="deskImg"
            />
          </ImgWrapper>
        </MainPageWrapper>
      </Wrapper>
    </>
  );
}

export default NavBar;
