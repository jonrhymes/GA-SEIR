const React = require('react');

class Show extends React.Component {
    render () {
        return (
            <div>
                <h1>Fruits</h1>
                <h2>Name: {this.props.fruit.name}</h2>
                <h2>Color: {this.props.fruit.color}</h2>
                <h2>{this.props.fruit.readyToEat? 'And it is ready to eat': 'Not yet ripe'}</h2>
                <h2><a href='/fruits/'>Link to index page</a></h2>
                {/* <ul>
                {this.props.demo.map((item, index) => {
                    console.log(item)
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
                </ul> */}
            </div>
        )
    }
}
module.exports = Show;