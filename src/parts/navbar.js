import React from 'react-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">
          <img src="/images/bank-icon.jpg" alt="Bank Icon" className="iconImage small" />
          Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/CreateAccount/" title="Create an Account">Create an Account</Nav.Link>
            <Nav.Link href="#/deposit/" title="Make a deposit">Make a Deposit</Nav.Link>
            <Nav.Link href="#/withdraw/" title="Make a Withdraw">Make a Withdraw</Nav.Link>
            <Nav.Link href="#/alldata/" title="See All Data">See All Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}


export default NavBar