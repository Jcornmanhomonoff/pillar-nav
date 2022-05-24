import React, { useState } from 'react';
import { Link } from 'gatsby';
import './input.scss';
import { toUpperCase } from '../../assets/scripts/helpers';

const Input = props => {
    const {
        name
    } = props,
    [ inputValue, setInputValue ] = useState('');

    return (
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
    )
};

export default Input;
