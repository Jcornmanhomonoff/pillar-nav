import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Layout from '../templates/layout';
import '../assets/styles/pages/index.scss';
import {
    dataObjState,
    pipelineVersionState
} from '../state/state';

const IndexPage = () => {
    const [dataObj, setDataObj] = useRecoilState(dataObjState),
        [pipelineVersion, setPipelineVersion] = useRecoilState(pipelineVersionState);

    useEffect(() => {
        // fetch('https://jessicapillar.free.beeceptor.com')
        //   .then(response => response.json())
        //   .then(data => {
        //       setDataObj(data);
        //   });
        let data = {
          "pipeline1": "AP 2011.2",
          "pipeline2": "AP 2021.1",
          "pipeline3": "AP 2022.1"
        }
        setDataObj(data); // if met rate limiter
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderOptions = obj => {
        //grab all values from data & populate select with options
        let values = Object.values(obj);

        return values.map((value, i) => {
            return (
                <option value={value} key={i}>{value}</option>
            )
        })
    };

    return (
        <Layout pageTitle="Home">
            <h1>Select Analysis Pipeline Version</h1>
            <label htmlFor="analysis-dropdown">
                <span className="field--name field--name-select">Analysis Pipeline:</span>
                <select
                    name="analysis-dropdown"
                    onChange={e => {
                        let value = e.target.value
                        setPipelineVersion(value);
                    }}
                    value={pipelineVersion}
                >
                    <option
                        disabled
                        value=""
                    >
                        Select...
                    </option>
                    {dataObj && renderOptions(dataObj)}
                </select>
            </label>
            {pipelineVersion && (
                <div className="information">
                    <article className="information--piece">
                        <h4>PiVAT {pipelineVersion.slice(3)} User Manual</h4>
                        <a
                            href={`/${pipelineVersion}`}
                            className="download"
                        >
                            Download
                        </a>
                    </article>
                    <article className="information--piece">
                        <h4>PiVAT {pipelineVersion.slice(3)} Release Notes</h4>
                        <a
                            href={`/${pipelineVersion}`}
                            className="download"
                        >
                            Download
                        </a>
                    </article>
                </div>
            )}
        </Layout>
    )
};

export default IndexPage;
