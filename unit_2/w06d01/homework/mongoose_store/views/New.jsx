const React = require('react');
const Default = require('./Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default>
                <nav className="nav">
                <a className="new" href="/store">Return to Store</a>
                </nav>
                <h1 className="grocery">New Product</h1>
                <div>
                <form action="/store" method="POST" className="new-form">
                    Name: <input type="text" name="name"/><br />
                    Description: <input type="text" name="description"/><br />
                    Image: <input type="text" name="img"/><br />
                    Price: <input type="text" name="price"/><br />
                    Quantity: <input type="text" name="qty"/><br />
                    <input type="submit" name="" value="Create Product"/>
                </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;