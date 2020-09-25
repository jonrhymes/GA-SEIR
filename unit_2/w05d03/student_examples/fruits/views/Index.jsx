const React = require('react');
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render(){
        console.log(this.props);
        // const title = this.props.title;
        // const fruits = this.props.fruits;
        const { title, fruits } = this.props;
        return (
            // must wrap Layout around this
            <Layout>    
                <h1 className="myClass">{title}</h1>
                <img src="/img/banana.jpg"/>
                <div>
                <a href="/fruits/new">Add New Fruit</a>
                </div>
                <div style={{backgroundColor: 'salmon'}}>
                    {fruits.map((fruit, index) => {
                        return (
                            <div key={index}>
                                <p>The {fruit.name} is {fruit.color}</p>
                                <p>{fruit.readyToEat ? "Its ready to eat" : "It is not ready to eat"}</p>
                                <a href={`/fruits/${index}`}>See More</a>
                            </div>
                        )
                    })}
                </div>
            </Layout>  
        )
    }
}

module.exports = Index;