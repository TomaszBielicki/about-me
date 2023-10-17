import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Potrfolio from "./components/Portfolio/Potrfolio";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";

const Wrapper = styled.div`
  font-family: "Raleway", sans-serif;
  color: white;
  padding-bottom: 50px;
  background: #6e07f3;
  /*hsla(0, 0%, 3%, 1);

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
  ); */
`;

function App() {
  return (
    <Wrapper>
      <NavBar />
      <AboutMe />
      <Potrfolio />
      <Footer />
    </Wrapper>
  );
}

export default App;
