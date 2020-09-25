const React = require('react');
const {Component} = React;
const Default = require('./Default');

class Index extends Component {
    render() {
        const { title, pokemon} = this.props;
        return(
            <Default>  
                <div className='card-container'>
                    {pokemon.map((pokemon, index) => {
                        return (
                            <a href={`/pokemon/${index}`}><img className='cards' src={pokemon.img}/></a>
                        )
                    })}
                </div>

            </Default>
        )
    }
};

module.exports = Index;