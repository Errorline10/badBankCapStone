import React, { useContext, useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import Context from '../context/myContext'

function CreateBankAccount() {
  const { state, setState } = useContext(Context);

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  // eslint-disable-next-line
  const [currentActiveAccount, setCurrentActiveAccount] = useState(state.currentActiveFocus);

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

      let newState = state;
      newState.currentUser.bankAccounts.push({ name: name, email: state.currentUser.email, password: password, transactions: [] });
      setState(newState);
      setState({ ...state, currentActiveFocus: state.currentUser.bankAccounts.length - 1 });


      setShow(false);
      setStatus("Your Account named '" + name + "' Was Created Successfully");
    }
  }

  function clearForm() {
    setName('');
    setShow(true);
    setStatus('');
  }

  function checkForBlankForm(e) {
    if (show) {

      let name = document.getElementById('name').value;
      setbuttonDisabled(!name)
    }
  }

  return (
    <>

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

            </>
          }
        />
      </form>

    </>
  )
}

export default CreateBankAccount;
