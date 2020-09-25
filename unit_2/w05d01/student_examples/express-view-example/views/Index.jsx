const React = require('react');
const Default = require('./layouts/Default.jsx');
const Jumbotron = require('./components/Jumbotron.jsx');


class Index extends React.Component {
    render(){
        return (
            <Default title="This is just the beginning">
            <Jumbotron></Jumbotron>
            <div>
            <h1>
                Hello World from {this.props.name}!
            </h1>
            <p>
                Today, I took my dog {this.props.dog} for a walk. {this.props.dog} saw many {this.props.enemy}s. She barked at all of them.
            </p>
            <p>
                Other enemies include: {this.props.otherEnemy1} and {this.props.otherEnemy2}.
            </p>
            </div>
            </Default>
        )
    }
}
// ^ Only return ONE Component... 
// never forget we have to export at the bottom
module.exports = Index;