const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout')

class New extends Component {
    render() {
        const { title, Budget, bankAccount } = this.props;
        return (
            <Layout>
                <h1>Add New Expense</h1>
                <a href='/budgets'>Return to Index</a>
                <div>
                <form action="/budgets" method="POST">
                    <input type="text" name="date" placeholder="date"/><br />
                    <input type="text" name="name" placeholder="name"/><br />
                    <input type="text" name="amount" placeholder="amount"/><br />
                    <input type="text" name="from" placeholder="from"/><br />                                  <input type="submit" name="" value="Create New Expense" />                    
                </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;