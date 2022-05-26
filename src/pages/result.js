import * as React from 'react';
import Layout from '../templates/layout';
import '../assets/styles/pages/result.scss';
import { useRecoilValue } from 'recoil';
import {
    formDataState
} from '../state/state';
import { toUpperCase } from '../assets/scripts/helpers';

const ResultPage = () => {
    const formData = useRecoilValue(formDataState);

    const printRows = () => {
        return Array.from(formData.entries()).map((entry, i) => {
            return (
                <div key={i} className="results--row">
                    <div className="results--row__col">
                        {entry[0] === 'pipeline-version' ? toUpperCase(entry[0].replace('-', ' ')) : toUpperCase(entry[0])}
                    </div>
                    <div className="results--row__col">
                        {entry[1]}
                    </div>
                </div>
            )
        })
    },

    renderFormContent = () => {
        return (
            <React.Fragment>
                <h1>Results</h1>
                <div className="results">
                    {printRows()}
                </div>
            </React.Fragment>
        )
    }

    return (
        <Layout pageTitle="Result">
            {formData ? renderFormContent() : <p>Please fill out analysis form</p>}
        </Layout>
    )
};

export default ResultPage;
