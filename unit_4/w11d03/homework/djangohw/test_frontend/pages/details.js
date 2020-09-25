import Layout from '../components/Layout';
import React from 'react'
import fetch from 'isomorphic-unfetch';


export default function Details (props) {

    return (
        <Layout>
            <h1>Skills Details</h1>
            <h2>{props.skills}</h2>
        </Layout>
    )
}


Details.getInitialProps = async ({query}) => {
    let res, data, skills;
    try {
        res = await fetch(`http://127.0.0.1:8000/api/v1/skill/`)
        data = await res.json();
        skills = data.objects.find({});
    } catch(error){
        console.error(error);
    }
    return {
        skills
    }
};

// export default Details;