import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Potrfolio from "./components/Portfolio/Potrfolio";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Raleway", sans-serif;
  color: white;
  padding-bottom: 50px;
  background: hsla(0, 0%, 3%, 1);

  background: linear-gradient(
    135deg,
    hsla(0, 0%, 3%, 1) 0%,
    hsla(269, 85%, 41%, 1) 79%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(0, 0%, 3%, 1) 0%,
    hsla(269, 85%, 41%, 1) 79%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(0, 0%, 3%, 1) 0%,
    hsla(269, 85%, 41%, 1) 79%
  );
`;

function App() {
  return (
    <Wrapper>
      <NavBar />
      <AboutMe />
      <Potrfolio />
    </Wrapper>
  );
}

export default App;
