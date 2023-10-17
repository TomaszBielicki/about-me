import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  font-family: "eurostile", sans-serif;
  text-align: center;
  width: 100vw;
  padding-top: 50px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;
`;
export const MainPageWrapper = styled.div`
  /* height: 100vh; */
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin-top: 20vh;
  //border-bottom: 3px solid white;
`;

export const DeskImg = styled.img`
  width: 800px;
`;

export const AvatarWrapper = styled.div`
  align-items: center;
`;

export const Title = styled.h1`
  line-height: 1.125;
  font-weight: 800;
  font-size: 50px;
`;

export const Text = styled.p`
  font-size: 25px;
`;
