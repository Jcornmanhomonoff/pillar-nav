import React, { useState } from 'react';
import { toUpperCase } from '../../assets/scripts/helpers';
import './input.scss';

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
                    className={`${inputValue.length === 0 ? 'field--invalid' : ''}`}
                />
            </label>
        </div>
    )
};

export default Input;
