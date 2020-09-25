import React from 'react'; // Browser Server » same thing as saying const React = require('react');
import { students } from '../data';
import Student from './Student.js';

export default class Nova extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// state is the data has locally on this page
			name: 'Jon',
			students: students,
			buddy: 'Sadie',
			isCool: true
		};
		// must be in constructor but OUTSIDE of state
		this.changeCoolStudent = this.changeCoolStudent.bind(this);
		// ^ ALWAYS refers to Nova
	}
	// makeStudents = () => {
	// 	return this.state.students.map((student, index) => {
	// 		return <li key={index}>{student.name}</li>;
	// 	});
	// };

	makeStudents = filteredStudents => {
		// const results = this.state.students.map((student, index) => {
		const results = filteredStudents.map((student, index) => {
			return (
				<Student
					key={index}
					student={student}
					updateStudent={this.changeCoolStudent}
				></Student>
				// <li key={index}>
				// 	{student.name} – {student.title}
				// </li>

				// Button effect
				// <li key={index}>
				// 	<button
				// 		onClick={() => {
				// 			this.changeCoolStudent(student);
				// 		}}
				// 	>
				// 		{student.name}
				// 	</button>
				// </li>
			);
		});
		console.log(results);
		return results;
	};

	changeCoolStudent(newCoolKid) {
		/*
        this.state = {name: 'Ian'}
        const thingIwant = {name: 'Michael'}
        const newState = {...this.state, ...thingIwant} 
        */
		this.setState({ name: newCoolKid.name, buddy: 'none' });
	}

	render() {
		const westCoast = this.state.students.filter(student => {
			return student.westCoast;
		});
		const eastCoast = this.state.students.filter(student => {
			return !student.westCoast;
		});
		return (
			<>
				<div className="Page">
					{/* ^ CONDITIONAL RENDERING */}
					<ul classname="column"> {this.makeStudents(westCoast)}</ul>
					<ul classname="column"> {this.makeStudents(eastCoast)}</ul>
					{this.state.isCool
						? `${this.state.name} is awesome, too!`
						: `${this.state.name} isn't cool`}
				</div>
				<h1>
					{this.state.name} {this.props.thingIGotFromApp}
				</h1>
				<h1>and their favorite teacher is {this.props.favoriteTeacher}</h1>
				{/* {this.state.students.map((student, index) => {
					return <li key={index}>{student.name}</li>;
                })} */}
			</>
		);
	}
}
