import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Tab } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultActiveKey="1" id="uncontrolled-tab-example"  style={ {height: '100%', width: '100%'} }>
          <Tab eventKey="home" title="Home" style={ {height: '100%', width: '100%'} } >
            <img src={logo} className="App-logo" alt="logo" />
          </Tab>
          <Tab eventKey="1" title="1"  style={ {height: '100%', width: '100%'} }>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </Tab>
        </Tabs>
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
