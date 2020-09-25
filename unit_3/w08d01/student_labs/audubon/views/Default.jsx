const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href="/styles.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;