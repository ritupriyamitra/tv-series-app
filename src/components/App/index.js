import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Main from '../Main';




class App extends React.Component{


render(){
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <Main/>

    </div>
  );
}
}
export default App;
