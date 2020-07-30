import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './container/Home.jsx';
import History from './container/History.jsx';
import appData from './commons/data.json';
import Api from './service/api'

function App() {
  
  let history= {}
  
  const initHistory = (quantities) => {
    quantities.forEach((quantity) => {
    history[quantity.name] = [];
    })
  }

  const updateHistory = (record) => {
    history[record.name].push(record);
  }

  const initApp = (quantities, updateState) => {
    
    Promise.all(quantities.map(quantity=> Api.getValidUnits(quantity.name)
                                              .then(resp => quantity.units=resp.data.value)))
            .then(()=>{
              initHistory(quantities)
              updateState()
            })
  }

  return (
    <Router>
      <Header name={appData.appName} navLinks={appData.navigation}></Header>
      <Route path="/" exact>
        <Home quantities={appData.quantities} initapp={initApp}  updateHistory={updateHistory}></Home>
      </Route>
      <Route path="/history" exact>
        <History records={history}></History>
      </Route>
    </Router> 
  );
}

export default App;
