import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../templates/layout';
import { useRecoilState, RecoilRoot } from 'recoil';

const ResultPage = () => {
    return (
        <Layout pageTitle="Result">
            <p>This is my result page</p>
        </Layout>
    )
};

export default ResultPage;
