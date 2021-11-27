import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import TopStudents from './components/TopStudents';
import TopStudentCard from './components/TopStudentCard';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>

          <Route path="/" >
            <Home />
            <TopStudents />
            <TopStudentCard />
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

export default App;
