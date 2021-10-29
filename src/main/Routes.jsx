import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CaseManipulator from "../textManipulator/CaseManipulator";
import WideTextGenerator from "../textManipulator/WideTextGenerator";

const Routes =  props => (
    <Router>
        <Switch>
            <Route exact path="/case-manipulate" component={CaseManipulator} />
            <Route path="/wide-text" component={WideTextGenerator}/>
            <Route path='*' component={CaseManipulator}/>
        </Switch>
    </Router>
);

export default Routes;