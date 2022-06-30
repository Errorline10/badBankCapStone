import React, { useContext, useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import myContext from '../context/myContext'

function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const ctx = useContext(myContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label + ' is a required field.');
      return false;
    }

    if (!(/^[0-9]+$/.test(field))) {
      setStatus('Error: ' + label + ' must be a valid whole positive number.');
      return false;
    }

    return true;
  }

  function handleCreate() {
    if (!validate(amount, 'amount')) return;
    ctx.users[parseInt(ctx.currentActive)].transactions.push({ deposit: parseInt(amount) });
    setShow(false);
    setStatus(<p>'Deposit was Successfull'</p>);
  }

  function clearForm() {
    setAmount(0);
    setShow(true);
    setStatus('');
  }

  function checkForBlankForm(e) {
    if (show) {
      let amount = document.getElementById('amount').value;
      setbuttonDisabled(!amount)
    }
  }

  return (
    <form onChange={e => checkForBlankForm(e)}>
      <BootstrapCard
        header="Deposit"

        buttonText="Deposit This Amount"
        callback={handleCreate}
        buttonDisabled={buttonDisabled}

        buttonResetText="Make Another Deposite"
        callbackReset={clearForm}

        status={status}
        show={show}

        body={(
          <>
            Amount to Deposit<br />
            <input required type="input" className="form-control" id="amount" placeholder="Enter Amount to deposite" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
          </>
        )}
      />
    </form>
  )
}

export default Deposit;
