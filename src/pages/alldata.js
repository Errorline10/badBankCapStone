import React, { useContext } from 'react';
import { BootstrapCard } from '../parts/bootstrapCard';
import Context from '../context/myContext'

function AllData() {
  // eslint-disable-next-line
  const { state, setState } = useContext(Context);

  function DisplayAccountActivivty() {
    let htmlNode = []
    for (let x in state.currentUser.bankAccounts[state.currentActiveFocus].transactions) {
      let action = state.currentUser.bankAccounts[state.currentActiveFocus].transactions[x];
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
      {
        state.currentUser.bankAccounts.length === 0 ?

          <BootstrapCard
            header={"No Accounts Found"}
            show={true}
            body={<p>Please Create at least one account to use this page.</p>}
          />

          :

          <BootstrapCard
            header={"Account Activity for - " + state.currentUser.bankAccounts[state.currentActiveFocus].name}
            show={true}
            body={<DisplayAccountActivivty />}
          />


      }
    </>

  );
}

export default AllData;
