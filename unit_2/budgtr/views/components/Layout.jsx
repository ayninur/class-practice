const React = require("react");
// const budget = require('/budget.js');


class Layout extends React.Component {
    render() {
      return (
        <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header>
            <h1>Budgtr </h1>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1>This is my footer</h1>
          </footer>
        </body>
      </html>
      )
    }
}
module.exports = Layout;