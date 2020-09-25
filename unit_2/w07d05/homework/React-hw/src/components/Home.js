// Home Page

import React, { Component } from 'react';
import SideBar from './SideBar.js';
import MainContent from './MainContent.js';
import AppButton from './AppButton.js';

export default class Home extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<>
				<div className="HolyGrail-body">
					<main className="HolyGrail-content">
						<MainContent />
					</main>
					<nav className="HolyGrail-nav">
						<h1>NAV</h1>
						<SideBar />
					</nav>
					<aside className="HolyGrail-ads">
						<h1>ASIDE</h1>
						<AppButton />
					</aside>
				</div>
			</>
		);
	}
}
