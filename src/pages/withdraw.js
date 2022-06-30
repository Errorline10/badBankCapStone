import React, { useContext, useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import Context from '../context/myContext'

function Withdraw() {
  const { state, setState } = useContext(Context);

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  function validate(field, label) {
    if (!field) { // empty field check
      setStatus('Error: ' + label + ' is a required field.');
      return false;
    }
    if (!(/^[0-9]+$/.test(field))) { // positive number check
      setStatus('Error: ' + label + ' must be a valid whole positive number.');
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (show) {
      if (!validate(amount, 'amount')) return;
      setShow(false);

      // OverDraft Check
      if (parseInt(state.currentUser.bankAccounts[state.currentActiveFocus].calculatedBalance) < amount) {
        setStatus(<><p>'Withdraw Error: this amount will cause an overdraft'</p></>);
      } else {

        // todo: use the API to Update the DB
        // update the context (new transaction for the currentActive account)
        let newstate = state;
        newstate.currentUser.bankAccounts[parseInt(state.currentActiveFocus)].transactions.push({ withdraw: parseInt(amount) })
        setState(newstate);

        setStatus(<><p>'Withdraw was Successfull'</p></>);
      }
    }
  }

  function clearForm() {
    setAmount(0);
    setShow(true);
    setStatus('');
  }

  function checkForBlankForm(e) { // disable submit if form is blank
    if (show) {
      let amount = document.getElementById('amount').value;
      setbuttonDisabled(!amount)
    }
  }


  return (
    <form onChange={e => checkForBlankForm(e)}>
      <BootstrapCard
        header="Withdraw"

        buttonText="Withdraw This Amount"
        callback={handleCreate}
        buttonDisabled={buttonDisabled}

        buttonResetText="Make Another Withdraw"
        callbackReset={clearForm}

        status={status}
        show={show}

        body={(
          <>
            Amount to Withdraw<br />
            <input
              required
              type="input"
              className="form-control"
              id="amount"
              placeholder="Enter Amount to Withdraw"
              value={amount}
              onChange={e => setAmount(e.currentTarget.value)} />
            <br />
          </>
        )}
      />
    </form>
  )
}

export default Withdraw;
