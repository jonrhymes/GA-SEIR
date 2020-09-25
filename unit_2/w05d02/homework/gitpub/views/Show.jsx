const React = require('react');

const myStyle = {
    color: '#f8f8ff',
    backgroundColor: '#b87333',
};

class Show extends React.Component {
    render() {
        // const drink = this.props.drinks
        return (
            <html>
            <head><title>Drinks</title></head>
            <body style={myStyle}>
                <h1>Show Page</h1>

            {/* {this.props.drinks} */}

            {/* {this.props.drinks.map((item, index)=>{
            console.log(item)
            return (
             <li key={index}>{item}</li>
            )
            })} */}

{/* !! PROBLEM: I'm getting an Error: Objects are not valid as a React child (found: object with keys {name, price, image}). If you meant to render a collection of children, use an array instead.) 

I believe I've set everything up properly but it's not working*/}


             </body>
            </html>
        )
    }
};

module.exports = Show;