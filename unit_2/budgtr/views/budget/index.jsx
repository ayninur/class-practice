const React = require('react')
const Layout = require('../Layout.jsx')
const Budget = require('/Users/anur/seir-flex-zen-work/homework/unit_2/budgtr/models/budget.js')


class Index extends React.Component {
    render () {
            return (
            <Layout title="Budgtr">
                <table>
                    {budget.map((item, index) => {
                        return <tr>
                            <td>{item.date}</td> 
                            <td><a href={`/${index}`}>{item.name}</a></td>
                            <td>{item.from}</td>
                            <td>{item.amount}</td>
                            </tr>
                        })}
                    
                </table>
            </Layout>
            
        )
    }
}

module.exports = Index