import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import myContext from './context/myContext'
import NavBar from './parts/navbar';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/home'
import CreateBankAccount from './pages/createBankAccount'
import Deposit from './pages/deposit'
import Withdraw from './pages/withdraw'
import AllData from './pages/alldata'
import GetMongo from './pages/getMongo'
import RegisterNewUser from './pages/registerNewUser'
import LogIn from './pages/logIn'


import { MyProvider } from './context/myContext'

import './bootstrap.min.css';
import './index.css';

const rawData = {
  currentActiveFocus: 0,
  currentUser: {
    name: '',
    email: '',
    password: '',
    token: '',
    bankAccounts: [{ name: 'BankVault', transactions: [{ deposit: 100 }] }]
  }
}


function App() {
  const ctx = useContext(myContext);
  const [currentUser, setCurrentUser] = useState(rawData);

  function userHasLoggedIn(userData) {
    if (userData) {
      console.log('userhasLoggedIn');
      setCurrentUser(userData);
      if (ctx){ctx.currentUser = userData};
    }
  }



  return (
    <HashRouter>
      [ currentUser = {JSON.stringify(currentUser)}]
      <NavBar currentUser={currentUser} />
      <MyProvider value={rawData}>
        <div className="container" style={{ padding: "20px" }}>
          <>
            {!currentUser?.token ?
              <>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/registerNewUser/" element={<RegisterNewUser />} />
                  <Route path="/logIn/" element={<LogIn callBack={userHasLoggedIn} />} />
                </Routes>
              </>
              :
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/createBankAccount/" element={<CreateBankAccount />} />
                <Route path="/deposit/" element={<Deposit />} />
                <Route path="/withdraw/" element={<Withdraw />} />
                <Route path="/alldata/" element={<AllData />} />
                <Route path="/getmongo/" element={<GetMongo />} />
                <Route path="/registerNewUser/" element={<RegisterNewUser />} />
                <Route path="/logIn/" element={<Home />} />
              </Routes>

            }</>
        </div>
      </MyProvider>
    </HashRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

