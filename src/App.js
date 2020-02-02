import React, {useEffect, useState} from 'react';
import api from './services/api';

import logo from './logo.svg';
import './App.css';

function App() {

  const [flash, setFlash] = useState({});

  const [totalSalesDaily, setTotalSalesDaily] = useState({});

    useEffect(() => {
        async function loadSalesFlash() {          
            const response = await api.get('/marketplace');
            setFlash(response.data);
            setTotalSalesDaily(response.data.totalSalesDaily);
        }

        loadSalesFlash();

    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Flash de Vendas - Captação - {flash.type}. Total: {totalSalesDaily.orders}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
