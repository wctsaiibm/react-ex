import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Tab } from 'react-bootstrap';

function App() {
  // TODO: move tab line to top
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <img src={logo} className="App-logo" alt="logo" />
          </Tab>
          <Tab eventKey="1" title="1">
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
