const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        console.log(this.props)
        const { birds } = this.props;
        return (
            <Default>
                <nav>
                    <a href="birds/new">Add a new bird</a>
                </nav>
            <div>
                <h1>Index Bird page</h1>
                <div>
                {birds.map((bird, index) => {
                    return (
                        <div key={index}>
                            {bird.birdName}
                            <br />
                            <img src={bird.image}/>
                            <br />
                            {bird.user}
                        </div>
                    )
                })}
                </div>
            </div>
            </Default>
        )
    }
}

module.exports = Index;