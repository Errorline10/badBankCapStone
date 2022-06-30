import React, { useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import {createNewUser} from '../api/createNewUser';

function RegisterNewUser() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label + ' is a required field.');
      return false;
    }

    if (label === 'password' && field.length < 8) {
      setStatus('Error: ' + label + ' must be at least 8 characters long');
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (show) {
      if (!validate(name, 'name')) return;
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;

      // use API to register a new user
      createNewUser({name: name, email: email, password: password});

      setShow(false);
      setStatus( name + "; Welcome to Bad Bank");
    }
  }

  function redirectToLogIn() {
    console.log('redirect');
    //document.location = '/';
  }

  function checkForBlankForm(e) {
    if (show) {
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let pass = document.getElementById('password').value;
      setbuttonDisabled(!name && !email && !pass)
    }
  }

  return (
    <form id="createAccountForm" onChange={e => checkForBlankForm(e)}>
      <BootstrapCard
        header="Register as a New User"

        buttonText="Register"
        callback={handleCreate}
        buttonDisabled={buttonDisabled}

        buttonResetText="Log In with New Credentials"
        callbackReset={redirectToLogIn}

        status={status}
        show={show}
        supressAccountSelector={true}

        body={
          <>
            <hr />
            Name *<br />
            <input
              required
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.currentTarget.value)} />
            <br />

            Email Address *<br />
            <input
              required
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)} />
            <br />

            Password *<br />
            <input
              required
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)} />
            <br />
          </>
        }
      />
    </form>

  )
}

export default RegisterNewUser;
