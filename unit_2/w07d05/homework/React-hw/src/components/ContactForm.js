import React, { Component } from 'react';

export default class ContactForm extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<form action="/email" method="POST">
				<fieldset class="info">
					<legend>INFORMATION</legend>
					First name:
					<input type="text" name="firstname" />
					<br />
					Last name:
					<input type="text" name="lastname" />
					<br />
					What do you need?:
					<input type="textarea" name="why" />
					<br />
					<input type="submit" value="Submit" />
				</fieldset>
			</form>
		);
	}
}
