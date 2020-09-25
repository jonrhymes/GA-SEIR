import React, { Component } from 'react';

export default class AppFooter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'From Dusk Till Lawn',
			address: '555 John Deere Rd, St. Petersburg, FL'
		};
	}
	render() {
		return (
			<div className="appfooter">
				<h2>{this.state.name}</h2>
				<h2>{this.state.address}</h2>
			</div>
		);
	}
}
