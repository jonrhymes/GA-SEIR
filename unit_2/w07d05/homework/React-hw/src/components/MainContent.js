import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

// Router sourced from: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

import About from './About';
import Hello from './Hello';
import ContactUs from './ContactUs';

export default class MainContent extends Component {
	render() {
		return (
			<div className="main">
				<HashRouter>
					<Route path="/about" component={About} />
					<Route path="/hello" component={Hello} />
					<Route path="/contactus" component={ContactUs} />
				</HashRouter>
			</div>
		);
	}
}
