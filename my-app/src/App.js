import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

function App(...args: []) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Liand
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >google.com</Button>
<Button variant="contained"
          className="App-link"
          href
          target="_blank"
          rel="noopener noreferrer"
        >test</Button>
      Button type="submit">Submit</Button>
     
      </header>
    </div>
  );
}

export default App;
