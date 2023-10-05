import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 2px solid white;

  margin-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 20vw;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const Text = styled.p`
  text-align: center;
  width: 200px;
`;

export const SocialsLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
`;
