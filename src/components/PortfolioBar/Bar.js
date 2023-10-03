import React from "react";
import { Wrapper, Title, WlabadiMainPageImage, BarWrapper } from "./Bar.style";

import {
  wlabadiMainPage,
  krainaPieknaMainPage,
  batixMainPage,
} from "../../assets";

function Bar() {
  return (
    <BarWrapper>
      <Wrapper>
        <WlabadiMainPageImage src={wlabadiMainPage} />
        <Title>WlaBadi</Title>
        <p>Dog Hotel and Care Service</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Wrapper>
      <Wrapper>
        <WlabadiMainPageImage src={krainaPieknaMainPage} />
        <Title>Kraina Piękna</Title>
        <p>Beauty Salon Service</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Wrapper>
      <Wrapper>
        <WlabadiMainPageImage src={batixMainPage} />
        <Title>Batix</Title>
        <p>Window Decoration Web Service - ecommerce</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Wrapper>
    </BarWrapper>
  );
}

export default Bar;
