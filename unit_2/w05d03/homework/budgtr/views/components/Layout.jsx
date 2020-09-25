const React = require('react');

const Layout = (props) => {
    return (
        <>
        <head>
            <link rel="stylesheet" href="/css/styles.css"/>
            <title>Budgtr</title>
        </head>
        <body>
            {props.children}
        </body>
        </>
    )
}

module.exports = Layout;