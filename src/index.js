import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

//const getCurrentDate =()=>{//function(){
//  const date = new Date();
//  return date.toDateString();
//}
//const greeting = <h1>Hello World current Date : {getCurrentDate()}</h1>//React.createElement('h1',{},'HelloWorld!');
//ReactDOM.render(greeting, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
