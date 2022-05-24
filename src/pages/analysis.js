import * as React from 'react';
import Layout from '../templates/layout';
import Form from '../components/form/form';
import { useRecoilValue } from 'recoil';
import {
    pipelineVersionState
} from '../state/state';

const AnalysisPage = () => {
    const pipelineVersion = useRecoilValue(pipelineVersionState);

    return (
        <Layout pageTitle="Analysis">
            {pipelineVersion ? <Form title="Create analysis"/> : <p>Please select a pipeline version</p>}
        </Layout>
    )
};

export default AnalysisPage;
