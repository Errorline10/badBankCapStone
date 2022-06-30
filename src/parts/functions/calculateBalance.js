import { useContext } from 'react';
import myContext from '../../context/myContext'

export default function CalculateBalanceForUser(accountId) {
  const ctx = useContext(myContext);
  let currentBalance = 0;

  for (let x in ctx.users[accountId].transactions) {
    let action = ctx.users[accountId].transactions[x];
    if (action.deposit) { currentBalance = currentBalance + action.deposit; }
    if (action.withdraw) { currentBalance = currentBalance - action.withdraw; }
  }

  ctx.users[accountId].balance = currentBalance;
  return currentBalance
}
