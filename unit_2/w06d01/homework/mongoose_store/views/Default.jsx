const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
            <head>
            <meta charSet="utf-8"/>
            <link rel="stylesheet" href="/css/styles.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700" rel="stylesheet"/> 
            <title>{this.props.title}</title>
        </head>
        <body>
        {/* <h1>{this.props.title}</h1> */}
       {/* This is where our other components will be injected */}
          {this.props.children}
        </body>
    </html>
        )
    }
}

module.exports = Default;