import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Students from './Students';
import Classes from './Classes';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
    <Router>
        <div className="router">
            <div className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Students">Estudiantes</Link>
                        </li>
                        <li>
                            <Link to="/Classes">Clases</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="routes">
                <Route exact path="/" component={Home} />
                <Route path="/Students" component={Students} />
                <Route path="/Classes" component={Classes} />
            </div>
        </div>
    </Router>
)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
