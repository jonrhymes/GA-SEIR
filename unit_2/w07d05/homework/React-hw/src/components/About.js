import React, { Component } from 'react';
import { landscapers } from '../data';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'From Dusk Till Lawn',
			landscapers: landscapers,
			address: '555 John Deere Rd, St. Petersburg, FL',
			slogan: 'We take care of all the trimmings'
		};
	}

	makeMembers = () => {
		return this.state.landscapers.map((landscaper, index) => {
			return (
				<li key={index}>
					{landscaper.name} - {landscaper.service}
				</li>
			);
		});
	};

	render() {
		return (
			<>
				<div className="about-name">{this.state.name} Landscapers</div>
				<br />
				<div className="address">{this.state.address}</div>
				<br />
				<h1>Our Team:</h1>
				<br />
				<div className="team">
					{this.state.landscapers.map((landscaper, index) => {
						return (
							<li key={index}>
								{landscaper.name} – {landscaper.service}
								<br />
								Rate: ${landscaper.rate}
								<br />{' '}
								{landscaper.worksWeekends
									? `${landscaper.name} works Saturday and Sunday`
									: `${landscaper.name} doesn't work on weekends`}
							</li>
						);
					})}
				</div>
			</>
		);
	}
}
