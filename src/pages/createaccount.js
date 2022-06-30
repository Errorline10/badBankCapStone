import React, { useContext, useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import myContext from '../context/myContext'

function CreateAccount() {

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const ctx = useContext(myContext);
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(ctx.currentActive);

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
      ctx.users.unshift({ name, email, password, transactions: [] });
      setShow(false);
      setStatus("Your Account named '" + name + "' Was Created Successfully");
    }
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('');
  }

  function checkForBlankForm(e) {
    setCurrentUser(ctx.users.length)

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
        header="Create Account"

        buttonText="Create Account"
        callback={handleCreate}
        buttonDisabled={buttonDisabled}

        buttonResetText="Add Another Account"
        callbackReset={clearForm}

        status={status}
        show={show}

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

export default CreateAccount;
