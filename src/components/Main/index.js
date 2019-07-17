import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../../container/Series';
import SingleSeries from '../../container/SingleSeries';
import './App.css';
import 'whatwg-fetch';

const Main=props=>(
  <Switch>
  <Route exact path="/" component ={Series} />
  <Route exact path="/series/:id" component ={SingleSeries} />
  </Switch>
)

export default Main;
