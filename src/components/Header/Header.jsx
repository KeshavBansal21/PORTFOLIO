import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar  collapseOnSelect fixed='top' expand='sm' bg="myRed   " variant="light">
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-app'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav >
            <Nav.Link href="/">Intro</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
/* <div className="nav-comps">
    <Link to="/" className="nav-comp1">
      Intro
    </Link>
    <Link to="/about" className="nav-comp2">
      About
    </Link>
    <Link to="/product" className="nav-comp3">
      Products
    </Link>
    <Link to="/contact" className="nav-comp4">
      Contact
    </Link>
  </div> */
/* </div> */

export default Header;
