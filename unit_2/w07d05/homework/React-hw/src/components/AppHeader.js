import React, { Component } from 'react';

export default class AppHeader extends Component {
	constructor() {
		super();
		this.state = {
			name: 'From Dusk Till Lawn',
			address: '555 John Deere Rd, St. Petersburg, FL',
			slogan: 'We take care of all the trimmings'
		};
	}
	render() {
		return (
			<div className="appheader">
				<h1>{this.state.name} Landscapers</h1>
				<h4 className="slogan">"{this.state.slogan}"</h4>
			</div>
		);
	}
}
