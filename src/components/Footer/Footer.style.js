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
  padding: 40px;
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
  cursor: pointer;
  background-color: #6e07f3;
  fill: white;
  border: 3px solid white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  text-align: center;
`;
