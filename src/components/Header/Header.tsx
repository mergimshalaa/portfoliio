import "bootstrap/dist/css/bootstrap.min.css";
import { Container, NavbarBrand, Navbar as NavbarBs } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { StyledLink, StyledLinkHome, StyledNav } from "./header-styled-components";
import { HamburgerMenu } from "../MenuToggle/HamburgerMenu";
import "./header.css";

export function Header() {
  return (
    <NavbarBs className="bg-transparent header sticky-top">
      <div>
        <HamburgerMenu />
      </div>
      <StyledLinkHome to="/" as={NavLink}>
        <FaHome style={{ fontSize: "2rem" }} />
      </StyledLinkHome>
      <Container
        className="d-flex justify-content-end align-items-center flex-grow-1"
        style={{ paddingRight: "55px" }}
      >
        <StyledNav>
          <StyledLink to="/about" as={NavLink}>
            ABOUT
          </StyledLink>
          <StyledLink to="/projects" as={NavLink}>
            PROJECTS
          </StyledLink>
          <StyledLink to="/resume" as={NavLink}>
            RESUME
          </StyledLink>
        </StyledNav>
      </Container>
    </NavbarBs>
  );
}
