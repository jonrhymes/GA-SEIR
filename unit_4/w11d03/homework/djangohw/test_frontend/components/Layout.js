import Nav from './Nav';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>My Dev Skills</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
            </Head>
            <div className="container">
                <Nav/>
                    {props.children}
            </div>
        </>
    )
};



export default Layout;