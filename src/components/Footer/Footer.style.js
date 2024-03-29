import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  margin-top: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 20vw;
  display: flex;
  padding: 40px;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const IconWrapper = styled.span`
  width: 20px;
  height: 20px;
`;

export const Text = styled.p`
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.8;
`;

export const SocialsLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  fill: white;
  border: 3px solid white;
  border-radius: 50%;
  padding: 5px;
  width: 47px;
  height: 47px;
  text-align: center;
`;
