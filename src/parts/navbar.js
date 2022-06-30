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
              <Nav.Link href="#/createBankAccount/" title="Create a New Bank Account">Create New Account</Nav.Link>
              <Nav.Link href="#/deposit/" title="Make a deposit">Make a Deposit</Nav.Link>
              <Nav.Link href="#/withdraw/" title="Make a Withdraw">Make a Withdraw</Nav.Link>
              <Nav.Link href="#/alldata/" title="See All Data">See All Data</Nav.Link>
              <div onClick={()=>logOut()}>[Log Out]</div>
            </Nav>
          }


        </Navbar.Collapse>
      </Container>
    </Navbar >)
}


export default NavBar