const React = require('react')

const Layout = (props) => {
    return (
        <>
        <head>
            <link rel="stylesheet" href="/css/style.css"/>
            <title>Fruits</title>
        </head>
        <body>
            {props.children}
            {/* Injects everything from INDEX into here. Don't have to use this.props.children because it's not a CLASS, it's a FUNCTION */}
        </body>
        </>
    )
}

module.exports = Layout;