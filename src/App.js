import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main";

import Home from "./components/Home";
import About from "./components/About";
import Gear from "./components/Gear";
import Lesson from "./components/Lesson";
import Contact from "./components/Contact";
import Error from "./components/Error";

import "./style/main.css";
import "bootstrap/dist/js/bootstrap";

class App extends Component {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <BrowserRouter>
                    <Main />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/index" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/gear" component={Gear} />
                        <Route path="/lesson" component={Lesson} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
