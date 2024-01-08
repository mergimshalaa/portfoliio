import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar as NavbarBs } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "../MenuToggle/HamburgerMenu";
import { StyledLink, StyledLinkHome, StyledNav } from "./header-styled-components";
import "./header.css";

export function Header() {
  return (
    <NavbarBs className="bg-transparent header sticky-top">
      <div>
        <HamburgerMenu />
      </div>
      <StyledLinkHome aria-label="Homepage" to="/" as={NavLink}>
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
