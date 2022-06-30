import { useContext } from 'react';
import Context from '../../context/myContext'

export default function CalculateBalanceForUser(accountId) {
  const { state, setState } = useContext(Context);

  let currentBalance = 0;

  for (let x in state.currentUser.bankAccounts[accountId].transactions) {
    let action = state.currentUser.bankAccounts[accountId].transactions[x];
    if (action.deposit) { currentBalance = currentBalance + action.deposit; }
    if (action.withdraw) { currentBalance = currentBalance - action.withdraw; }
  }

  let newState = state;
  newState.currentUser.bankAccounts[accountId].calculatedBalance = currentBalance;
  setState(newState);

  //state.currentUser.bankAccounts[accountId].calculatedBalance = currentBalance;
  return currentBalance
}
