import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Input from '../input/input';
import './form.scss';
import { useRecoilState, RecoilRoot } from 'recoil';

const Form = props => {
    const {
        title
    } = props,
    formRef = useRef(null),
    [ disabled, setDisabled ] = useState(false);

    let inputNames = ['path', 'name'];

    const checkForValues = () => {
        const fields = formRef.current.querySelectorAll('form input');

        console.log(fields)
        const hasValue = field => {
            return field.value.length !== ''
        };

        console.log(fields.every(hasValue))
        // fields.every(hasValue) === '' ? setDisabled(false) : setDisabled(true)
    }

    const onFormSubmit = e => {
        e.preventDefault();

        let data = new FormData(e.target);

        checkForValues();

        for (var pair of data.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
    };

    return (
        <form
            onSubmit={onFormSubmit}
            className=""
            ref={formRef}
        >
            <h1>{title}</h1>
            {inputNames.map((name, i) => {
                return <Input key={i} name={name} />
            })}
            <input
                type="submit"
                value="Submit"
                disabled={disabled}
            />
        </form>
    )
};

export default Form;
