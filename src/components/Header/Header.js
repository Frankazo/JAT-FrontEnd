import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link style={{ color: `#000` }} href="#board">Board</Nav.Link>
    <Nav.Link style={{ color: `#000` }} href="#change-password">Change Password</Nav.Link>
    <Nav.Link style={{ color: `#000` }} href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link style={{ color: `#000` }} href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link style={{ color: `#000` }} href="#sign-in">Sign In</Nav.Link>
    <Nav.Link style={{ color: `#000` }} href="#about">About</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/*<Nav.Link style={{ color: `#000` }} to="/">Home</Nav.Link>*/}
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="dark" expand="sm" style={{ marginLeft: `100px`, marginRight: `100px`, backgroundColor: `#E9F3F1` }}>
    <Navbar.Brand>
      <img src={require(`../../resources/images/favicon.png`)} alt="Logo" style={{ width: '30px', height: '30px' }}></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2" style={{ color: `#000` }}>Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
