import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../components/Home";

//import theme  from "../utils/theme";

//import {useSelector} from "react-redux";

export default function RouterComponent() {

    //const ui = useSelector((state) => state.ui);
    //const THEME = createTheme(theme(ui.isDarkMode));

    return (
        <Router>
            <Switch>
                <Route  component={Home} path="/" />
            </Switch>
        </Router>
    )
}
