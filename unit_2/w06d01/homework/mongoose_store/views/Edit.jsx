const React = require('react');
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        const product = this.props.product;
        const { name, description, img, price, qty } = this.props.product;
        return (
            <Default>
                <nav>
                <a href="/store" className="new">Return to Store</a>
                </nav>
                <h1 className="grocery">{name} Edit page</h1>
                <form action={`/store/${product._id}?_method=put`} method="POST" className="new-form">

                    Name: <input type="text" name="name" value={name}/><br />
                    Description: <input type="text" name="description" value={description}/><br />
                    Image: <input type="text" name="img" value={img}/><br />
                    Price: <input type="text" name="price" value={price}/><br />
                    Quantity: 
                    <input type="text" name="qty" value={qty}/>
                    <br/>
                  <input type="submit" name="" value="Make Changes to Item"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;