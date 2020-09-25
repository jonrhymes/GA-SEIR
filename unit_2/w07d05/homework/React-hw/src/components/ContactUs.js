import React, { Component } from 'react';
import ContactForm from './ContactForm.js';

export default class Contact extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<>
				<h1>Weed love to hear from you!</h1>
				<br />
				<ContactForm />
			</>
		);
	}
}
