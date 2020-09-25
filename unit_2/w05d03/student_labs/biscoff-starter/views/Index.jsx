const React = require('react');
const {Component} = React

class Index extends Component {
    render() {
        console.log(this.props)
        const { title, bakedGoods } = this.props;
        return (
            <>
            <h1>{title}</h1>
            <div>
                    {bakedGoods.map((bakedGood, index) => {
                        return (
                            <div key={index}>
                                <p>The {bakedGood.name} is ${bakedGood.price}</p>
                                <img src={bakedGood.image} />
                                <a href={`/bakedgoods/${index}`}>See More</a>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
    
}

module.exports = Index;