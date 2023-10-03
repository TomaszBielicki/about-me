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

//import { mfAvatar } from "assets";

import { mfAvatar } from "../../assets";

function NavBar() {
  return (
    <>
      <Wrapper>
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
        </MainPageWrapper>

        <ImgWrapper>
          <DeskImg
            src="https://mattfarley.ca/img/hero-devices.svg"
            alt="deskImg"
          />
        </ImgWrapper>
      </Wrapper>
    </>
  );
}

export default NavBar;
