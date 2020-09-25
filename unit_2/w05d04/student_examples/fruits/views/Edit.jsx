const React = require('react');
const {Component} = React
const Default = require('./Default.jsx')

class Edit extends Component {
    render() {
        const {fruit, index} = this.props;
        console.log(fruit);
        return (
            <Default>
                <h1> Edit {fruit.name}</h1>
                <form action={`/fruits/${index}?_method=PUT`} method="POST">
                    Name:
                    <input type="text" name="name" value={fruit.name}/>
                    Color: 
                    <input type="text" name="color" value={fruit.color}/>
                    Ready To Eat:
                    <input type="checkbox" name="readyToEat" checked={fruit.readyToEat ? "checked": ""}/>
                    <input type="submit" value="Update"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;