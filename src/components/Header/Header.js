/** @format */

import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="#">
        <a
          styles={{
            display: "flex",
            "align-items": "center",
            color: "white",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Abdullah Mohamed</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#work">
          <NavLink>Work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/DeluxeViper">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://linkedin.com/in/abdullah-mohamed"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
