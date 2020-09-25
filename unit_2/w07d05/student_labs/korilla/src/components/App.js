import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import { receipts } from '../data/receipts';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receipts: receipts
		};
	}
	render() {
		console.log(this.state.person);
		console.log(receipts.order);
		return (
			<div className="Page-wrapper">
				<h2>KORILLA</h2>
				{/* <Home /> */}
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
