const React = require('react');
// import React, {Component} from 'react'
const Default = require('./Default.jsx')

class Show extends React.Component {
    render() {
        const {product} = this.props;
        return (
            <Default title="SHOW PAGE">
            <a href="/store" className="new" >Return to Store</a>
            <div className="show-card">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.img}/>
                <h3>Price: ${product.price}</h3>
                <h3 className={product.qty <= 0 ? "out" : "negative" }>OUT OF STOCK</h3>
                <div className="item-qty">
                 {product.qty} remaining
                </div>
                <form action={`/store/buy/${product._id}?_method=put`} method="POST">
                <button type="submit" className={product.qty > 0 ? "buy-btn" : "negative" }>BUY</button>
                </form>
                <br />
                <a href={`/store/edit/${product._id}`}>EDIT {product.name}</a>
                <form action={`/store/${product._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Show;