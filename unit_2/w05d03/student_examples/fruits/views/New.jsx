const React = require('react');
// destructure component
const {Component} = React;
const Layout = require('./components/Layout')

class New extends Component {
    render() {
        return (
            <Layout>
                <h1>New Page</h1>
                {/* different request pulls a different route from our Index route */}
                <form action="/fruits" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    {/* name="name" becomes key property in Object */}
                    Color: <input type="text" name="color" /><br/>
                    Is Ready to Eat: <input type="checkbox" name="readyToEat" /><br/>
                    <input type="submit" name="" value="Create Fruit"/>
                </form>
            </Layout>
        );
    }
}

module.exports = New;