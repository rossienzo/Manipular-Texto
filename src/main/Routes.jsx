import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CaseManipulator from "../textManipulator/CaseManipulator";
import WideTextGenerator from "../textManipulator/WideTextGenerator";
import BinaryTextGenerator from "../textManipulator/BinaryTextGenerator";
import NotFound from "../textManipulator/NotFound";

const Routes = props => (
    <Router>
        <Switch>
            <Route path="/" exact component={CaseManipulator} />
            <Route path="/case-manipulate" component={CaseManipulator} />
            <Route path="/to-binary-text" component={BinaryTextGenerator}/>
            <Route path="/wide-text" component={WideTextGenerator}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="*" to="/not-found" />
        </Switch>
    </Router>
);

export default Routes;