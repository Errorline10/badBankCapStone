import { useContext } from 'react';
import myContext from '../../context/myContext'

export default function CalculateBalanceForUser(accountId) {
  const ctx = useContext(myContext);
  let currentBalance = 0;

  for (let x in ctx.currentUser.bankAccounts[accountId].transactions) {
    let action = ctx.currentUser.bankAccounts[accountId].transactions[x];
    if (action.deposit) { currentBalance = currentBalance + action.deposit; }
    if (action.withdraw) { currentBalance = currentBalance - action.withdraw; }
  }

  ctx.currentUser.bankAccounts[accountId].calculatedBalance = currentBalance;
  return currentBalance
}
