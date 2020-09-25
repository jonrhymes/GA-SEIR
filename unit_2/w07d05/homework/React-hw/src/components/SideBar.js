import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from 'react-router-dom';

// Router sourced from: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

export default class SideBar extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<HashRouter>
				<nav className="navbar">
					<ul>
						<li className="links">
							<NavLink to="/hello" className="navlink">
								Home
							</NavLink>
						</li>
						<li className="links">
							<NavLink to="/about" className="navlink">
								About
							</NavLink>
						</li>
						<li className="links">
							<NavLink to="/contactus" className="navlink">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</HashRouter>
		);
	}
}
