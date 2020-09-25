import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Home from './Home.js';

const goods = [
	{
		item: 'Milk',
		brand: 'Califia Farms',
		units: '1.4L',
		quantity: 1,
		isPurchased: false
	},
	{
		item: 'Bread',
		brand: "Dave's Killer Bread",
		units: '27oz',
		quantity: 1,
		isPurchased: false
	},
	{
		item: 'Eggs',
		brand: "Land O' Lakes",
		units: '12 pack',
		quantity: 1,
		isPurchased: false
	},
	{
		item: 'Beer',
		brand: 'Yuengling',
		units: '6 pack',
		quantity: 1,
		isPurchased: false
	}
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			goods: goods,
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		};
	}
	handleChange = event => {
		this.setState({
			[event.currentTarget.id]: event.currentTarget.value
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		const newGood = {
			item: this.state.item,
			brand: this.state.brand,
			units: this.state.units,
			quantity: this.state.quantity,
			isPurchased: this.state.isPurchased
		};
		this.setState({
			goods: [newGood, ...this.state.goods],
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		});
	};
	togglePurchased = () => {
		this.setState({ isPurchased: !this.state.isPurchased });
	};
	render() {
		console.log(goods);
		return (
			<div className="main-app">
				<h2 className="main-app__title">Groceries</h2>
				<ul className="main-app__goods">
					{
						(this.state.goods.isPurchased = true
							? this.state.goods.map((good, index) => (
									<li>
										{good.item} - {good.brand}
										<br />
										<button onClick={this.togglePurchased}>Purchased?</button>
										{this.state.isPurchased ? (
											<h2>Buy Next Time</h2>
										) : (
											<button>Remove</button>
										)}
									</li>
							  ))
							: null)
					}
				</ul>
				<div className="main-app__preview">
					<h2>Preview</h2>
					<div className="main-app__preview--item">{this.state.item}</div>
					<div className="main-app__preview--item">{this.state.brand}</div>
					<div className="main-app__preview--item">{this.state.units}</div>
					<div className="main-app__preview--item">{this.state.quantity}</div>
				</div>
				<h3>Add item below</h3>
				<form className="main-app__form" onSubmit={this.handleSubmit}>
					<label htmlFor="item">Item Name</label>
					<input
						type="text"
						id="item"
						value={this.state.item}
						onChange={this.handleChange}
						className="main-app__form--item"
					></input>
					<label htmlFor="brand">Brand Name</label>
					<input
						type="text"
						id="brand"
						value={this.state.brand}
						onChange={this.handleChange}
						className="main-app__form--item"
					></input>
					<label htmlFor="units">Units</label>
					<input
						type="text"
						id="units"
						value={this.state.units}
						onChange={this.handleChange}
						className="main-app__form--item"
					></input>
					<label htmlFor="quantity">Quantity</label>
					<input
						type="number"
						id="quantity"
						value={this.state.quantity}
						onChange={this.handleChange}
						className="main-app__form--item"
					></input>
					<input
						type="submit"
						className="main-app__form--submit"
						value="Enter Item"
					/>
				</form>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
