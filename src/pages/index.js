import React, { useEffect, useState } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import Layout from '../templates/layout';
import {
    dataObjState,
    selectedOptionState
} from '../state/state';

let data = {
  "pipeline1": "AP 2011.2",
  "pipeline2": "AP 2021.1",
  "pipeline3": "AP 2022.1"
}

const IndexPage = () => {
    const [dataObj, setDataObj] = useRecoilState(dataObjState),
        [selectedOption, setSelectedOption] = useRecoilState(selectedOptionState);

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
        let values = Object.values(obj);

        return values.map((value, i) => {
            return (
                <option value={value} key={i}>{value}</option>
            )
        })
    };

    const setContent = select => {
        console.log(select)
        if (select !== '') {
            
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
        </Layout>
    )
};

export default IndexPage;
