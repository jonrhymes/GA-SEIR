import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AppButton extends Component {
	constructor() {
		super();
		this.state = {
			cardText: ''
		};
	}
	addACard = element => {
		let cardText = window.prompt(
			'Choose a Day',
			'Mon, Tues, Wed, Thurs, Fri, Sat, Sun'
		);
		const list = document.getElementById(element);
		const card = document.createElement('li');
		card.innerText = cardText;
		list.appendChild(card);
		return;
	};
	addDate = event => {
		return this.addACard('availability');
	};
	render() {
		return (
			<div>
				<div className="column">
					<ul id="availability">Choose your next appointment:</ul>
					<button onClick={this.addDate}>Add Day</button>
				</div>
			</div>
		);
	}
}
