import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';

const IndexPage = () => {
    useEffect(() => {
        fetch('https://pillar.free.beeceptor.com/api/pulldown')
          .then(response => response.json())
          .then(data => console.log(data));
    }, []);

    return (
        <Layout pageTitle="Home">
            <h2>Select Analysis Pipeline Version</h2>
            <label htmlFor="analysis-dropdown">
                Analysis Pipeline:</label>
            <select name="analysis-dropdown">
            </select>
        </Layout>
    )
};

export default IndexPage;
