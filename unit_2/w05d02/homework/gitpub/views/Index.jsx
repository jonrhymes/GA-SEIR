const React = require('react');
// const drinks = require('./models/drinks')

const myStyle = {
    color: '#f8f8ff',
    backgroundColor: '#b87333',
};

class Index extends React.Component {
    render() {
        // const drink = this.props.drinks
        return (
            <html>
            <head><title>Drinks Index</title></head>
            <body style={myStyle}>
                <h1>Welcome to gitPub</h1>

            {/* {this.props.children} */}

            {/* 
            <ul>
            {this.props.drinks.map((item, index)=>{
            console.log(item)
            return (
             <li key={index}>{item}</li>
            )
            })} */}
            {/* </ul> */}

{/* !! PROBLEM: I'm getting an Error: Objects are not valid as a React child (found: object with keys {name, price, image}). If you meant to render a collection of children, use an array instead.) 

I've set everything up properly but it doesn't seem to work */}


             </body>
            </html>
        )
    }
};

module.exports = Index;