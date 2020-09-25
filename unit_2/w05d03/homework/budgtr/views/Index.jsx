const React = require('react');
const {Component} = React;
const Layout = require('./components/Layout.jsx')

class Index extends Component {
    render(){
        // console.log(this.props)
        const { title, Budget, bankAccount} = this.props;
        return(
            <Layout>
            <h1>{title}</h1>
                <h3><a href="/budgets/new">Add New Expense</a></h3>
                <h2 className={ bankAccount > 0 ? 'positive' : 'negative'}>Currently in the bank: ${bankAccount}</h2>
                <table>
                {Budget.map((Budget, index) => {
                    return (
                        <tr key={index}>
                        <td>                    {Budget.date}
                        </td>
                        <td>
                        <a href={`/budgets/${index}`}>  
                        {Budget.name}
                        </a>
                        </td>
                        <td>  
                        {Budget.from}
                        </td>
                        <td>  
                        {Budget.amount}
                        </td>
                        </tr>

                    )
                })}
                </table>
            </Layout>
        )
    }
}

module.exports = Index;