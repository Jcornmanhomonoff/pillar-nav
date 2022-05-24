import React, { useEffect, useState } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import Layout from '../templates/layout';
import {
    dataObjState
} from '../state/state';

let data = {
  "pipeline1": "AP 2011.2",
  "pipeline2": "AP 2021.1",
  "pipeline3": "AP 2022.1"
}

const IndexPage = () => {
  // const [dataState, setDataState] = useState('');

    const [ dataState, setDataState ] = useRecoilState(dataObjState);

    useEffect(() => {
        // fetch('https://jessicapillar.free.beeceptor.com')
        //   .then(response => response.json())
        //   .then(data => {
        //       console.log(data)
        //       setDataState(data);
        //   });
              setDataState(data); // if met rate limiter
    }, []);

    const renderOptions = (obj) => {
        let values = Object.values(obj);

        return values.map((value, i) => {
            return (
                <option value={value} key={i}>{value}</option>
            )
        })
    };

    return (
        <Layout pageTitle="Home">
            <h2>Select Analysis Pipeline Version</h2>
            <label htmlFor="analysis-dropdown">
                Analysis Pipeline:
                <select name="analysis-dropdown">
                    {dataState && renderOptions(dataState)}
                </select>
            </label>
        </Layout>
    )
};

export default IndexPage;
