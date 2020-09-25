const React = require('react');
const {Component} = React;
const Default = require('./Default');

class Edit extends Component {
    render() {
        const { pokemon, index } = this.props;
        // console.log(pokemon.name)
        return(
            <Default>
            <h1 className="editor">Edit {pokemon.name}</h1>
            <div key={index} className="form-div">
            <form action={`/pokemon/${index}?_method=PUT`} method="POST">
            <label for="name">NAME</label>
            <input type="text" name="name" index="name" value={pokemon.name}/><br />
            <input type="submit" name="" value="GO!"/>
            </form>
            </div>
            <div className="card-div">
            <img className="show-card" src={pokemon.img}/>
            <ul>
                <h3>Stats:</h3>
                    <li>Health points: {pokemon.stats.hp}</li>
                    <li>Attack points: {pokemon.stats.attack}</li>
                    <li>Defense points: {pokemon.stats.defense}</li>
                </ul>
                <ul><h3>Type:</h3>
                    <li className="type">{pokemon.type[0]}</li>
                    <li className="type">{pokemon.type[1]}</li>
                </ul>
            </div>
            </Default>

        )
    }
};

module.exports = Edit;