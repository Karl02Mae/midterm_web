import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import StudentEvaluation from '../components/IndividualStudentList';

export default function RouterComponent() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={StudentEvaluation} path="/studentevaluation" />
            </Switch>
            <Footer />
        </Router>
    )
}
