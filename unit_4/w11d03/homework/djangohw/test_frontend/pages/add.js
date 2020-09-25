import Layout from '../components/Layout';
import React from 'react'
// from django import forms
import fetch from 'isomorphic-unfetch';

export default function Add (props) {
    return (
        <Layout>
            <h1>Add a Skill</h1>

        </Layout>
    )
}


Add.getInitialProps = async () => {
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