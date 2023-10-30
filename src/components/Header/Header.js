import React from "react";
import { Text, Wrapper, NavLink } from "./Header.style";

function Header() {
  return (
    <Wrapper>
      <NavLink href="#1">
        <Text>Home</Text>
      </NavLink>
      <NavLink href="#2">
        <Text>About Me</Text>
      </NavLink>
      <NavLink href="#3">
        <Text>Projects</Text>
      </NavLink>
      <NavLink href="#4">
        <Text>Footer</Text>
      </NavLink>
    </Wrapper>
  );
}

export default Header;
