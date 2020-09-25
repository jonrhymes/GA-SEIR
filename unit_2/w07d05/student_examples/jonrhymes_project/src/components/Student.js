import React, { Component } from 'react';

export default function Student(props) {
	return (
		<li>
			<button
				onClick={() => {
					// props.updateStudent(props.student.name);

					// Pass in the whole object
					props.updateStudent(props.student);
				}}
			>
				{props.student.name}
			</button>
		</li>
	);
}
