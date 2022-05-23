import React, { useEffect, useState } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import Layout from '../templates/layout';
import {
    dataObjState
} from '../state/state';

const IndexPage = () => {
  // const [dataState, setDataState] = useState('');

    const [ dataState, setDataState ] = useRecoilState(dataObjState);

    useEffect(() => {
        fetch('https://jessicapillar.free.beeceptor.com')
          .then(response => response.json())
          .then(data => {
              console.log(data)
              setDataState(data);
              console.log(dataState)
          });

    }, []);

    // const createOptions = () => {
    //     for (const [key, value] of Object.entries(object1)) {
    //       console.log(`${key}: ${value}`);
    //     }
    // };

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
