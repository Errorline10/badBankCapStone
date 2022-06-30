import React, { useContext, useState } from 'react';
import myContext from '../context/myContext'
import calculateBalanceForUser from './functions/calculateBalance'

function AccountSelector(props) {
  const ctx = useContext(myContext);
  const [activeUser, setActiveUser] = useState(0);
  if (ctx){
    ctx.currentActive = activeUser;
  }

  function listAllUsers() {
    return (
      <>
        <select
          value={activeUser}
          onChange={e => {setActiveUser(Number(e.target.value)); props.callBack(Number(e.target.value)) }}
        >
          {ctx.users.map((user,key) => (
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
      {ctx?<p>Account: {listAllUsers()}</p>:null}
    </>
  );
}

export default AccountSelector;
