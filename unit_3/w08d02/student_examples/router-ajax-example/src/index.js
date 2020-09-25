import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch} from 'react-router';
// Router is the built-in component that will hold all of our routes
import { createBrowserHistory } from 'history';


import App from "./App"; // Home Page
import Contact from "./Contact"; // Contact Us
import About from "./About"; // About
import Test from "./Test" // Test page with dynamic route

// Defining what makes up each of those pages
// app.get('/contact-us', (req, res) => { res.render('Contact-Us', {}
// )})
const routes = [
    {
        path: '/contact-us',
        component: Contact,
        name: "Contact_Us"
    },
    {
        path: '/about',
        component: About,
        name: "About"
    },
    {
        path: '/',
        component: App,
        name: "Home"
    }
]

const root = document.getElementById('root');
let hist = createBrowserHistory();

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path={'/test/:id'} component={Test}></Route>
            {
                routes.map((route) => {
                    return (
                        <Route 
                            path={route.path} 
                            component={route.component}
                            key={route.name}
                        ></Route>
                    )
                })
            }
        </Switch>
    </Router>, root
)

export {
    routes
  }

