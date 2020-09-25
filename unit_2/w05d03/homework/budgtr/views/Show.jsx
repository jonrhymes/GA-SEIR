const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout')

class Show extends Component {
    render(){
        const { title, Budget, bankAccount } = this.props;
        return (
            <Layout>
                <h1>{Budget.name}</h1>
                <a href='/budgets'>Return to Index</a>
                <h3>Date: {Budget.date}</h3>
                <h3>From: {Budget.from}</h3>
                <h3>Amount: {Budget.amount}</h3>
            </Layout>
        )
    }
}

module.exports = Show;