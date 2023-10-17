import React from "react";
import { Tile, Title, BarImg, BarWrapper, TextTileWrapper } from "./Bar.style";

import {
  wlabadiMainPage,
  krainaPieknaMainPage,
  batixMainPage,
} from "../../assets";

function Bar() {
  return (
    <BarWrapper>
      <Tile>
        <a href="https://www.wlabadi.com" target="_blank" rel="noreferrer">
          <BarImg src={wlabadiMainPage} />
        </a>
        <TextTileWrapper>
          <Title>WlaBadi</Title>
          <p>Dog Hotel and Care Service</p>
          <h1>Technologies :</h1>
          <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
        </TextTileWrapper>
      </Tile>
      <Tile>
        <a
          href="https://www.kraina-piekna.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BarImg src={krainaPieknaMainPage} />
        </a>
        <TextTileWrapper>
          <Title>Kraina Piękna</Title>
          <p>Beauty Salon Service</p>
          <h1>Technologies :</h1>
          <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
        </TextTileWrapper>
      </Tile>
      <Tile>
        <a href="https://www.sklepbatix.net/" target="_blank" rel="noreferrer">
          <BarImg src={batixMainPage} />
        </a>
        <TextTileWrapper>
          <Title>Batix</Title>
          <p>Window Decoration Web Service - ecommerce</p>
          <h1>Technologies :</h1>
          <p>JavaScript, TypeScript, React, NextJS, Styled Components</p>
        </TextTileWrapper>
      </Tile>
    </BarWrapper>
  );
}

export default Bar;
