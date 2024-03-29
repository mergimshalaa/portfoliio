import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import './menu.css';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavbarLinks } from './Links';
import { Icons } from './hamburgerMenu-styled-component';


export function HamburgerMenu() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isMobile && (
        <Button className="menu-button bg-transparent" role="button" onClick={handleShow}>
          <FaBars style={{ color: '#fff', fontSize: '1.5rem' }} />
        </Button>
      )}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header role="button" closeButton style={{backgroundColor: '#333333'}}>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-custom">
          <NavbarLinks handleClose={handleClose} />
          <Icons style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <a href="https://github.com/mergimshalaa">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/mergim-shala-230691220/">
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:m3rgiim@hotmail.com">
              <FaEnvelope size={40} />
            </a>
          </Icons>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

