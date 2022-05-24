import React, { useEffect, useState } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import Layout from '../templates/layout';
import '../assets/styles/pages/index.scss';
import {
    dataObjState,
    selectedOptionState,
    pipelineState
} from '../state/state';

let data = {
  "pipeline1": "AP 2011.2",
  "pipeline2": "AP 2021.1",
  "pipeline3": "AP 2022.1"
}

const IndexPage = () => {
    const [dataObj, setDataObj] = useRecoilState(dataObjState),
        [selectedOption, setSelectedOption] = useRecoilState(selectedOptionState),
        [pipeline, setPipeline] = useRecoilState(pipelineState);

    useEffect(() => {
        // fetch('https://jessicapillar.free.beeceptor.com')
        //   .then(response => response.json())
        //   .then(data => {
        //       console.log(data)
        //       setDataObj(data);
        //   });
              setDataObj(data); // if met rate limiter
    }, []);

    const renderOptions = obj => {
        //grab all values from data & populate select with options
        let values = Object.values(obj);

        return values.map((value, i) => {
            return (
                <option value={value} key={i}>{value}</option>
            )
        })
    };

    const setContent = select => {
        if (select !== '') {
            // find matching key based off of selected option/value
            setPipeline(Object.keys(dataObj).find(key => dataObj[key] === select));
            // setDisabledElements(false);
        }
    }

    return (
        <Layout pageTitle="Home">
            <h2>Select Analysis Pipeline Version</h2>
            <label htmlFor="analysis-dropdown">
                <span className="field--name field--name-select">Analysis Pipeline:</span>
                <select
                    name="analysis-dropdown"
                    onChange={e => {
                        let value = e.target.value
                        setSelectedOption(value);
                        setContent(value)
                    }}
                    value={selectedOption}
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
            {selectedOption && (
                <div className="information">
                    <div className="information--piece">
                        <h4>PiVAT {selectedOption.slice(3)} User Manual</h4>
                        <a
                            target="_blank"
                            rel="noopener"
                            href={`/${selectedOption}`}
                            className="download"
                        >
                            Download
                        </a>
                    </div>
                    <div className="information--piece">
                        <h4>PiVAT {selectedOption.slice(3)} Release Notes</h4>
                        <a
                            target="_blank"
                            rel="noopener"
                            href={`/${selectedOption}`}
                            className="download"
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}
        </Layout>
    )
};

export default IndexPage;
