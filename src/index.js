// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter,{Clock,Banner} from './Component';
import { BrowserRouter, Route, hashHistory, Switch } from 'react-router-dom'

render(<BrowserRouter>
    <Greeter>
        <Route path="/" component={Clock}></Route>
        <Route path="/Banner" component={Banner} />
        <Route path="/Clock" component={Clock} />
        <Route path="/Greeter" component={Greeter} />
    </Greeter>
</BrowserRouter>, document.getElementById('root'));