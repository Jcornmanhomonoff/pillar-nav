import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../templates/layout';
import { useRecoilValue } from 'recoil';
import {
    formDataState
} from '../state/state';

const ResultPage = () => {
    const formData = useRecoilValue(formDataState);

    const printRows = () => {
        return Array.from(formData.entries()).map((entry, i) => {
            return (
                <div key={i} className="results--row">
                    <div className="results--row--key">
                        {entry[0]}
                    </div>
                    <div className="results--row--key">
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
