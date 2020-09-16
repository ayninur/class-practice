const React = require('react');
const Layout = require("../components/Layout")
const budget = require('/Users/anur/seir-flex-zen-work/homework/unit_2/budgtr/controllers/budget.js');

class Show extends React.Component {
    render() {
        return (
            <Layout title="Budgtr">
                <a href="/">Go back</a>
                <h2>Date</h2>
                <h3></h3>
                <h2>From</h2>
                <h3></h3>
                <h2>Amount</h2>
                <h3></h3>

            </Layout>
        )
    }
}

module.exports = Show;