import * as React from 'react';
import Layout from '../templates/layout';
import Form from '../components/form/form';
import { useRecoilState, RecoilRoot } from 'recoil';

const AnalysisPage = () => {
    return (
        <Layout pageTitle="Analysis">
            <Form title="Create analysis"/>
        </Layout>
    )
};

export default AnalysisPage;
