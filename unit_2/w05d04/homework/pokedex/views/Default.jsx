const React = require('react');
const {Component} = React;
const title = "Pokedex";

class Default extends Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/styles.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato" rel="stylesheet"></link>
                    <title>Pokedex</title>
                </head>
                <body>
                    <div className="div-top">
                    <img className="splash" src={'/img/1200px-International_Pokémon_logo.svg.png'}/>
                        <div className="btn-container">
                        <a className="btn" href="/pokemon">Home</a>
                        <a className="btn" href="/pokemon/new">Add Pok&eacute;mon</a>
                        </div>
                    </div>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;