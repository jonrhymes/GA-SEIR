const React = require('react');
const {Component} = React;
const Default = require('./Default');

class New extends Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/styles.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato" rel="stylesheet"></link>
                    <title>Pokedex</title>
                </head>
                <body className="new-form">
                <img className="pokeball" src={`/img/Poke_Ball.png`} />
                <div className="btn-container">
                <a className="btn" href="/pokemon">Home</a></div>
                <h1 className="build">Build Your Own Pok&eacute;mon</h1>
                <div className="form-div">
                <form action="/pokemon" method="POST">
                    <label for="name">NAME</label>
                    <input type="text" name="name" id="name" /><br />
                    <input type="submit" name="" value="GO!"/>
                </form>
                </div>
                </body>
            </html>
        )
    }
};

module.exports = New;