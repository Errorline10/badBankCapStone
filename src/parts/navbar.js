import React, {useContext} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Context , {blankData} from '../context/myContext'

export function NavBar() {
  const {state, setState } = useContext(Context);

function logOut(){
  setState(blankData);
}

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">
          <img src="/images/bank-icon.jpg" alt="Bank Icon" className="iconImage small" />
          Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {!state.currentUser?.token ?
            <Nav className="nav-right">
              <Nav.Link href="#/registerNewUser/" title="[Register as a New User]">[New User Register]</Nav.Link>
              - or -
              <Nav.Link href="#/logIn/" title="Log In">[Log In]</Nav.Link>
            </Nav>

            :

            <Nav className="me-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/createBankAccount/" title="Add an Account">Add an Account</Nav.Link>
              <Nav.Link href="#/deposit/" title="Deposit">Deposit</Nav.Link>
              <Nav.Link href="#/withdraw/" title="Withdraw">Withdraw</Nav.Link>
              <Nav.Link href="#/alldata/" title="All Data">All Data</Nav.Link>
              <Nav.Link href="#/logIn/" title="Log Out" onClick={()=>logOut()}>[Log Out]</Nav.Link>
            </Nav>
          }


        </Navbar.Collapse>
      </Container>
    </Navbar >)
}


export default NavBar