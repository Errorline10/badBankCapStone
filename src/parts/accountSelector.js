import React, { useContext } from 'react';
import calculateBalanceForUser from './functions/calculateBalance'
import Context from '../context/myContext'

function AccountSelector() {
  const { state, setState } = useContext(Context);

  function setActiveUser(n) {
    setState({ ...state, currentActiveFocus: n });
  }

  function listAllAccounts() {
    return (
      <>
        <select
          value={state.currentActiveFocus}
          onChange={e => { setActiveUser(Number(e.target.value)) }}
        >
          {state?.currentUser?.bankAccounts.map((user, key) => (
            <option key={key} value={key}>
              {user.name} - ${calculateBalanceForUser(key)}
            </option>
          ))}
        </select>
      </>
    )
  }

  return (
    <p>Account: {listAllAccounts()}</p>
  );
}

export default AccountSelector;
