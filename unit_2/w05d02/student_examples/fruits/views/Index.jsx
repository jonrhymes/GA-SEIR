const React = require('react');

class Index extends React.Component {
    render () {
        return (
            <div>
                <h1>Fruit Index</h1>
                <h1><a href="/fruits/0">Apple</a></h1>
                <h1><a href="/fruits/1">Pear</a></h1>
                <h1><a href="/fruits/2">Banana</a></h1>
                <a href={`/fruits${id}`}>{item.name}</a>
            </div>
        )
    }
}
module.exports = Index;