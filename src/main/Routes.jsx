import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CaseManipulator from "../textManipulator/CaseManipulator";
import WideTextGenerator from "../textManipulator/WideTextGenerator";
import BinaryTextGenerator from "../textManipulator/BinaryTextGenerator";

const Routes = props => (
    <Router>
        <Switch>
            <Route path="/case-manipulate" component={CaseManipulator} />
            <Route path="/to-binary-text" component={BinaryTextGenerator}/>
            <Route path="/wide-text" component={WideTextGenerator}/>
            
            <Redirect from="*" to="/case-manipulate" />
        </Switch>
    </Router>
);

export default Routes;