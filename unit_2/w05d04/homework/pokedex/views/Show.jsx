const React = require('react');
const {Component} = React;
const Default = require('./Default');
// const Edit = require('./Edit');

class Show extends Component {
    render() {
        const { pokemon, index } = this.props;
        // const allMoves = [];
        // for(let i = 0; i < pokemon.moves.level.length; i++){
        //     allMoves.push(pokemon.moves.level[i].name)
        // };
        // console.log(allMoves);
        return(
            <Default>
                <h1 className="show-title">{pokemon.name}</h1>
                <div className="card-div">
                <img className="show-card" src={pokemon.img}/>
                <ul><h3>Stats:</h3>
                    <li>Health points: {pokemon.stats.hp}</li>
                    <li>Attack points: {pokemon.stats.attack}</li>
                    <li>Defense points: {pokemon.stats.defense}</li>
                </ul>
                <ul><h3>Type:</h3>
                    <li className="type">{pokemon.type[0]}</li>
                    <li className="type">{pokemon.type[1]}</li>
                </ul>
                {/* <Edit>

                </Edit> */}
                
                <div key={index} className="form-div" id="show-id">
                    
{/* !! PROBLEM: Edit redirect doesn't work. When you click on it, it redirects to http://localhost:3000/pokemon/undefined/edit? But if you input the number into the browser, ( http://localhost:3000/pokemon/1/edit ) it will take you to the correct page which makes me think that it's not being passed properly from the server.js. Secondly, the delete button works, but the action performed only deletes the first card, when it should delete the current card */ }
                <form action={`/pokemon/${index}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
                <>
                <form action={`/pokemon/${index}/edit`} method="GET">
                    <input id="edit" type="submit" value="edit" />
                </form>
                </>
                </div>
                </div>
            </Default>
        )
    }
};

module.exports = Show;