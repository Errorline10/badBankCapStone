import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
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
import RegisterNewUser from './pages/registerNewUser'
import LogIn from './pages/logIn'



import './bootstrap.min.css';
import './index.css';

import Context, {blankData} from './context/myContext'

export default function AppWrapper() {
  const [state, setState] = useState(blankData);

  return (
    <Context.Provider value={{ state, setState }}> {/* passing state to in provider */}
      <App />
    </Context.Provider>
  );
}

function App() {
  // getting the state from Context
  // eslint-disable-next-line
  const { state, setState } = useContext(Context);
  return (
    <>
    {/* <pre>{JSON.stringify(state)}</pre> */}
      <HashRouter>
        <NavBar />
        <div className="container" style={{ padding: "20px" }}>
          <>
            {!state.currentUser?.token ?
              <>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/registerNewUser/" element={<RegisterNewUser />} />
                  <Route path="/logIn/" element={<LogIn />} />
                  <Route path="/*" element={<LogIn />} />
                </Routes>
              </>
              :
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/createBankAccount/" element={<CreateBankAccount />} />
                <Route path="/deposit/" element={<Deposit />} />
                <Route path="/withdraw/" element={<Withdraw />} />
                <Route path="/alldata/" element={<AllData />} />
                <Route path="/registerNewUser/" element={<Home />} />
                <Route path="/logIn/" element={<Home />} />
              </Routes>

            }</>
        </div>
      </HashRouter>

    </>
  );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWrapper />
);

