import React, { useContext, useState } from 'react'
import { BootstrapCard } from '../parts/bootstrapCard';
import Context from '../context/myContext'
import { transaction } from '../api/transaction'

function Deposit() {
  const { state, setState } = useContext(Context);

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

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

    // update the context (new transaction for the currentActive account)
    let newstate = state;
    newstate.currentUser.bankAccounts[parseInt(state.currentActiveFocus)].transactions.push({ deposit: parseInt(amount) })
    let accName = newstate.currentUser.bankAccounts[parseInt(state.currentActiveFocus)].name;
    transaction('deposit', accName, amount, state.currentUser)
    setState(newstate);


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
    <>
      {state.currentUser.bankAccounts.length === 0 ?

        <BootstrapCard
          header={"No Accounts Found"}
          show={true}
          body={<p>Please Create at least one account to use this page.</p>}
        />

        :

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

      }

    </>
  )
}

export default Deposit;
