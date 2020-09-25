const React = require('react');
const AppLayout = require('./AppLayout.jsx')

class Index extends React.Component {
    render() {
        const logout = (<form action="/sessions/?_method=delete" method="post"><input type="submit" value="Logout"/></form>)
    const welcome = (<h3>Welcome {this.props.username}</h3>)
        const { fruits } = this.props;
        return (
            <AppLayout title="INDEX PAGE">
                <h1>Fruits Index Page</h1>
                <h3>{this.props.username ? welcome : ''}</h3>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                   {this.props.username ? logout : ''} 
                <ul>
                    {
                        fruits.map((fruit, i) => {
                            console.log(fruit._id)
                            return (
                                <li>
                                    The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color} <br></br>
                                    {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}<br />
                                    <a href={`/fruits/edit/${fruit._id}`}>EDIT {fruit.name}</a>
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </AppLayout>
        )
    }
}

module.exports = Index;