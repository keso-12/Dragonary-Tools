import React from 'react';
import Link from '../shared/Link';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Home
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link path="/login">
          <Button variant="contained">Login</Button>
        </Link>
      </header>
    </div>
  );
}

export default App;
