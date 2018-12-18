import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path="/signup" component={SignupForm} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
