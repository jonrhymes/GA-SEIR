import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { products } from '../main.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: products,
			name: '',
			description: '',
			price: 0,
			isHiring: true
		};
	}
	toggleHiring = () => {
		this.setState({
			// switching states
			isHiring: !this.state.isHiring
		});
	};

	// let state = {coolestStudent: "Sheila", greeting: "hello world"}
	// const setState = (newState) => {
	// state = {...state, ...newState}
	// whatever comes second will overwrite the first one
	// return 'Updated state'
	// }

	// setState({greeting: "Greeting earthlings"})
	// console.log(state)

	// Or, if not binding anything...

	// state = {
	// products: products
	// }

	// makes this REUSABLE
	handleChange = event => {
		this.setState({
			// passing in a variable in order to return a string, on the left side it must be wrapped in [ ]
			[event.currentTarget.id]: event.currentTarget.value
		});
	};

	handleSubmit = event => {
		// prevent default behavior, Don't Reload the page
		event.preventDefault();

		const newProduct = {
			name: this.state.name,
			description: this.state.description,
			price: parseFloat(this.state.price)
		};
		const copyOfProducts = [newProduct, ...this.state.products];
		this.setState({
			products: copyOfProducts,
			name: '',
			description: '',
			price: 0
		});
	};

	render() {
		console.table(this.state.products);
		return (
			<div className="main-app">
				<h1 className="main-app__title" onClick={this.toggleHiring}>
					Big Time Shopping
				</h1>
				{!this.state.isHiring ? (
					<h2>We are not hiring</h2>
				) : (
					<h2>We are hiring</h2>
				)}
				<ul className="main-app__products">
					{this.state.products.length > 0
						? this.state.products.map((product, index) => {
								return (
									<li className="main-app__products--item" key={index}>
										<span>{product.name}</span>
										<span>${product.price}</span>
									</li>
								);
						  })
						: `There are no products here`}
				</ul>
				Add your item below
				<form className="main-app__form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						id="name"
						value={this.state.name}
						onChange={this.handleChange}
					></input>
					<input
						type="text"
						id="description"
						// id and value needs to match
						value={this.state.description}
						onChange={this.handleChange}
					></input>
					<input
						type="text"
						id="price"
						value={this.state.price}
						onChange={this.handleChange}
					></input>
					<input type="submit" value="add item"></input>
				</form>
				<div className="main-app__display">
					See Your New Item below
					<div className="main-app__display--item">{this.state.name}</div>
					<div className="main-app__display--item">
						{this.state.description}
					</div>
					<div className="main-app__display--item">{this.state.price}</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
