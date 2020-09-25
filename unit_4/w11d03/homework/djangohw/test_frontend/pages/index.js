import Layout from '../components/Layout';
import React from 'react'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';


export default function Index (props) {
    return (
        <Layout>
            <h1>Welcome to My Dev Skills</h1>
            <h2>{props.skills.map(skills =>
                <div><span style={{paddingRight: "15px"}}>{skills.skill_level}</span>
                <Link href={"/details/"}><a>{skills.description}</a></Link>
                </div>
                )}</h2>
        </Layout>
    )
}


Index.getInitialProps = async () => {
    let res, data, skills;
    try {
        res = await fetch('http://127.0.0.1:8000/api/v1/skill/')
        data = await res.json();
        skills = data.objects;
    } catch(error){
        console.error(error);
    }
    return {
        skills
    }
};

// Index.getInitialProps = async () => {
//     const res = await fetch('http://127.0.0.1:8000/api/v1/skill/');
//     const data = await res.json();
//     return {
//         data
//     }
// };

// const Index = () => {
//     return (
//         <Layout>
//                 <h1>My Dev Skills</h1>
//                 {props.data}
//         </Layout>
//     )
// };

// export default Index;