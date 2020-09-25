import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import AppHeader from './AppHeader.js';
import AppFooter from './AppFooter.js';

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<>
				<header>
					<AppHeader />
				</header>
				<Home />
				<footer>
					<AppFooter />
				</footer>
			</>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
