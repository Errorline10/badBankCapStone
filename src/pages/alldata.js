import React, { useContext, useState } from 'react';
import myContext from '../context/myContext'
import { BootstrapCard } from '../parts/bootstrapCard';

function AllData() {
  const ctx = useContext(myContext);
  const [currentUser, setCurrentUser] = useState(ctx.currentActive);

  function DisplayAccountActivivty() {
    let htmlNode = []
    for (let x in ctx.users[currentUser].transactions) {
      let action = ctx.users[currentUser].transactions[x];
      if (action.deposit) { htmlNode.push(<li>Deposit&nbsp;&nbsp;&nbsp;: ${action.deposit}</li>) }
      if (action.withdraw) { htmlNode.push(<li>Withdraw: ${action.withdraw}</li>) }
    }

    return (
      <ul>
        {htmlNode}
      </ul>
    )
  }

  return (
    <BootstrapCard
      header={"Account Activity for - " + ctx.users[currentUser].name}
      show={true}
      callBack={setCurrentUser}
      body={
        <>
          <DisplayAccountActivivty />
        </>
      }
    />

  );
}

export default AllData;
