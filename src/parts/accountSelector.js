import React, { useContext, useState } from 'react';
import myContext from '../context/myContext'
import calculateBalanceForUser from './functions/calculateBalance'

function AccountSelector(props) {
  const ctx = useContext(myContext);
  const [activeUser, setActiveUser] = useState(0);
  if (ctx){
    ctx.currentActiveFocus = activeUser;
  }

  function listAllAccounts() {
    return (
      <>
        <select
          value={activeUser}
          onChange={e => {setActiveUser(Number(e.target.value)); props.callBack(Number(e.target.value)) }}
        >
          {ctx.currentUser.bankAccounts.map((user,key) => (
            <option key={key} value={key}>
              {user.name} - ${calculateBalanceForUser(key)}
            </option>
          ))}
        </select>
      </>
    )
  }

  return (
    <>
      {ctx?<p>Account: {listAllAccounts()}</p>:null}
    </>
  );
}

export default AccountSelector;
