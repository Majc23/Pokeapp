import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { Form } from '../components/Form';

export const AppRouter = () => {

    return (
        <Router>
            <div className="App">
                <Switch>

                <   Route 
                        exact
                        path="/origen"
                        component={ Form }
                />

                    <Redirect to="/origen" />


                </Switch>
            </div>
        </Router>
    )

}