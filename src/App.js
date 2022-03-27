import { useState } from 'react';
import './css/App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import UserContext from './UserContext';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <UserContext.Provider value={{accounts, setAccounts}}>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}></NavBar>
        <MainMint accounts={accounts} setAccounts={setAccounts}></MainMint>
      </div>
    </UserContext.Provider>
  );
}

export default App;
