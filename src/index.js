import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './parts/navbar';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/home'
import CreateAccount from './pages/createaccount'
import Deposit from './pages/deposit'
import Withdraw from './pages/withdraw'
import AllData from './pages/alldata'
import GetMongo from './pages/getMongo'

import { MyProvider } from './context/myContext'

import './bootstrap.min.css';
import './index.css';

function App() {

  return (
    <HashRouter>
      <NavBar />
      <MyProvider value={
        {
          currentActive: 0,
          users: [
            {
              name: 'BankVault',
              email: 'mboston30@gmail.com',
              password: 'secret',
              transactions: [
                { deposit: 100 }
              ]
            }
          ]

        }
      }>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={Home} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
            <Route path="/getmongo/" element={<GetMongo />} />

          </Routes>
        </div>
      </MyProvider>
    </HashRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

