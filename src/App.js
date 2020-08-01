import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './container/Home.jsx';
import History from './container/History.jsx';
import appData from './commons/data.json';
import Api from './service/api'

function App() {
  
  const initHistory = (quantities) => {
    if(!localStorage.getItem('history')) { let history= {}
    quantities.forEach((quantity) => {
    history[quantity.name] = [];
    })
    localStorage.setItem('history',  JSON.stringify(history));}
  }

  const updateHistory = (record) => {
    let previousHistory = JSON.parse(localStorage.getItem('history'));
    previousHistory[record.name].push(record);
    localStorage.setItem('history', JSON.stringify(previousHistory));
  }

  const initApp = (quantities, updateState) => {
    
    Promise.all(quantities.map(quantity=> Api.getValidUnits(quantity.name)
                                              .then(resp => quantity.units=resp.data.value)))
            .then(()=>{
              initHistory(quantities)
              updateState()
            })
  }

  window.onbeforeunload = function() {
    localStorage.removeItem('history');
 }

  return (
    <Router>
      <Header name={appData.appName} navLinks={appData.navigation}></Header>
      <Route path="/" exact>
        <Home quantities={appData.quantities} initapp={initApp}  updateHistory={updateHistory}></Home>
      </Route>
      <Route path="/history" exact>
        <History></History>
      </Route>
    </Router> 
  );
}

export default App;
