import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand as="span">{siteTitle}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link as="span">Home</Nav.Link>
        </Link>
        <Link to="/cities">
          <Nav.Link as="span">Cities</Nav.Link>
        </Link>
        <Link to="/counties">
          <Nav.Link as="span">Counties</Nav.Link>
        </Link>
        <NavDropdown title="Education" id="basic-nav-dropdown">
          <Link to="/edu/universities">
            <NavDropdown.Item as="span">Universities</NavDropdown.Item>
          </Link>
          <Link to="/edu/community">
            <NavDropdown.Item as="span">Community Colleges</NavDropdown.Item>
          </Link>
          <Link to="/edu/k-12">
            <NavDropdown.Item as="span">K-12 Schools</NavDropdown.Item>
          </Link>
          <Link to="/edu/charter">
            <NavDropdown.Item as="span">Charter Schools</NavDropdown.Item>
          </Link>
        </NavDropdown>
        <Link to="/special">
          <Nav.Link as="span">Special Districts</Nav.Link>
        </Link>
        <Link to="/state">
          <Nav.Link as="span">State of California</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
