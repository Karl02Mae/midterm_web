import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// try lang kung mapupush


import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
  
        <Footer />

      </Router>
    </div>
  );
}

export default App;
