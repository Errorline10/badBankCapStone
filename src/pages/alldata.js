import React, { useContext, useState } from 'react';
import myContext from '../context/myContext'
import { BootstrapCard } from '../parts/bootstrapCard';

function AllData() {
  const ctx = useContext(myContext);
  const [currentActiveAccount, setCurrentActiveAccount] = useState(ctx.currentActiveFocus);

  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState(ctx.currentActiveFocus);

  function DisplayAccountActivivty() {
    let htmlNode = []
    for (let x in ctx.currentUser.bankAccounts[currentActiveAccount].transactions) {
      let action = ctx.currentUser.bankAccounts[currentActiveAccount].transactions[x];
      if (action.deposit) { htmlNode.push(<li key={x}>Deposit&nbsp;&nbsp;&nbsp;: ${action.deposit}</li>) }
      if (action.withdraw) { htmlNode.push(<li key={x}>Withdraw: ${action.withdraw}</li>) }
    }

    return (
      <ul>
        {htmlNode}
      </ul>
    )
  }


  return (
    <>

      <BootstrapCard
        header={"Account Activity for - " + ctx.currentUser.bankAccounts[currentUser].name}
        show={true}
        callBack={setCurrentActiveAccount}
        body={
          <>
            <DisplayAccountActivivty />
          </>
        }
      />

    </>

  );
}

export default AllData;
