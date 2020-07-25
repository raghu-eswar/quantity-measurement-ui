import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './container/Home.jsx';
import appData from './commons/data.json';

function App() {
  return (
    <Router>
      <Header name={appData.appName} navLinks={appData.navigation}></Header>
      <Route path="/" exact>
        <Home quantities={appData.quantities}></Home>
      </Route>
    </Router> 
  );
}

export default App;
