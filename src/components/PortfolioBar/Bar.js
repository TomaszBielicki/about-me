import React from "react";
import { Tile, Title, BarImg, BarWrapper } from "./Bar.style";

import {
  wlabadiMainPage,
  krainaPieknaMainPage,
  batixMainPage,
} from "../../assets";

function Bar() {
  return (
    <BarWrapper>
      <Tile>
        <a href="www.wlabadi.com">
          <BarImg src={wlabadiMainPage} />
        </a>
        <Title>WlaBadi</Title>
        <p>Dog Hotel and Care Service</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Tile>
      <Tile>
        <a href="https://www.kraina-piekna.com/">
          <BarImg src={krainaPieknaMainPage} />
        </a>

        <Title>Kraina Piękna</Title>
        <p>Beauty Salon Service</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Tile>
      <Tile>
        <a href="https://www.sklepbatix.net/">
          <BarImg src={batixMainPage} />
        </a>
        <Title>Batix</Title>
        <p>Window Decoration Web Service - ecommerce</p>
        <h1>Technologies :</h1>
        <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
      </Tile>
    </BarWrapper>
  );
}

export default Bar;
