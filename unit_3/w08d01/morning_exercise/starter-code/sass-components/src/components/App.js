import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Arthur'
		};
	}
	render() {
		return (
			<div className="Page-wrapper">
				<h2>ada app</h2>
				<Home />
				<article>
					<h2>This is an article tag</h2>
				</article>
				<article>
					<h2>This is an article tag</h2>
				</article>
				<article>
					<h2>This is an article tag</h2>
				</article>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
