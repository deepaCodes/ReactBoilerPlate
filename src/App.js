import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import PageNotFound from "./containers/PageNotFound";



function App() {
    return (
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;

