import React, { useState, useContext } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import { login } from '../api/login'
import Context from '../context/myContext'

function LogIn() {
  // eslint-disable-next-line
  const { state, setState } = useContext(Context);

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
      console.log('logging in...')

      // validate the form
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;



      // use API to get a token
      let returnedUserData = {};
      login({ email: email, password: password }).then((data) => {

        if (data.statusCode === 200) {
          returnedUserData = JSON.parse(data.body).msg[0];

          if (returnedUserData === undefined) {
            setStatus("Invalid username or password");
          } else {

            console.log('log in succsess', returnedUserData);

            // use returned api values from API to log in 
            returnedUserData.token = 'loardOfTheRings'; // todo... tokens
            let newState = {
              currentActiveFocus: 0,
              currentUser: returnedUserData
            }

            setState(newState);

            setShow(false);
            setStatus("You have successfully Logged in");
          }
        }
        else { console.log('server Error!') }



      })


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
