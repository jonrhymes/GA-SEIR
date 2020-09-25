import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Home from './Home.js';
import Nova from './Nova.js';

// parent component

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
				<h2>Super Nova app</h2>
				{/* Child component*/}
				<Nova
					favoriteTeacher={this.state.name}
					thingIGotFromApp="is the coolest student"
				/>
				{/* <Home /> */}
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
// this is the CRUX of the Application. It lives right in there.
