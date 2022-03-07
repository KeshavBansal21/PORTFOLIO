import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  function handler(cm) {
    navigate(cm);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="myRed   "
        useNavigate
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-app" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link onClick={(e) => handler("/")}>Intro</Nav.Link>
              <Nav.Link onClick={(e) => handler("/about")}>About</Nav.Link>
              <Nav.Link onClick={(e) => handler("/product")}>Products</Nav.Link>
              <Nav.Link onClick={(e) => handler("/contact")}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
/* <div className="nav-comps">
    <Link to="/product" className="nav-comp3">
      Products
    </Link>
    <Link to="/contact" className="nav-comp4">
      Contact
    </Link>
  </div> */
/* </div> */

export default Header;
