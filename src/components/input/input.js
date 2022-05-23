import React, { useState } from 'react';
import { Link } from 'gatsby';
import './input.scss';
import { toUpperCase } from '../../assets/scripts/helpers';
import { useRecoilState, RecoilRoot } from 'recoil';

const Input = props => {
    const {
        name
    } = props,
    [ inputValue, setInputValue ] = useState('');

    return (
        <RecoilRoot>
        <div className="field">
            <label htmlFor={name}>
                <span className="field--name">{toUpperCase(name)}</span>
                <input
                    type="text"
                    name={name}
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
            </label>
        </div>
        </RecoilRoot>

    )
};

export default Input;
