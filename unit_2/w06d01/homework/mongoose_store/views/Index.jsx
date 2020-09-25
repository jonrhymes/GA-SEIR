const React = require('react');
const Default = require('./Default.jsx')

class Index extends React.Component {
    render() {
        return (
            <Default title="INDEX PAGE">
                <nav className="nav">
                    <a className="new" href="/store/new">Add a New Item</a>
                </nav>
                <h1 className="grocery">GROCERY STORE</h1>
                <div className="product-container">
                    {this.props.products.map((product, index) => {
                        return (
                            <div className="main-cards">
                               <h1>{product.name}</h1><br />
                               <a href={`/store/${product._id}`}>
                               <img className="img-index"src={product.img}/></a><br />
                               Price: ${product.price}<br />
                               In Stock: {product.qty}
                               {/* <form action={`/store/${product._id}?_method=DELETE`} method="POST">
                                   <input type="submit" value="BUY" />
                               </form> */}
                            </div>
                        )
                    })}
                    </div>
            </Default>
        )
    }
}

module.exports = Index;