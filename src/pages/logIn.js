import React, { useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';

function LogIn(props) {

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
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

  function handleLogIn() {
    if (show) {
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;

      if (props.callBack) {
        console.log('AUTO: attempting login callback')
        // use API to get a token
        props.callBack({ name: 'mike', email: 'mboston30@gmail.com', password: 'password', token: '12345' });
      }

      setShow(false);
      setStatus("You have successfully Logged in");
    }
  }


  function checkForBlankForm(e) {
    if (show) {
      let pass = document.getElementById('password').value;
      setbuttonDisabled(!email && !pass)
    }
  }

  return (
    <>
      <form id="logInForm" onChange={e => checkForBlankForm(e)}>
        <BootstrapCard
          header="Log In"

          buttonText="Log In"
          callback={handleLogIn}
          buttonDisabled={buttonDisabled}


          status={status}
          show={show}
          supressAccountSelector={true}

          body={
            <>
              <hr />

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



    </>
  )
}

export default LogIn;
