import React, { useRef, useState } from 'react';
import Input from '../input/input';
import './form.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    pipelineVersionState,
    formDataState
} from '../../state/state';

const Form = props => {
    const {
        title
    } = props,
    formRef = useRef(null),
    [ message, setMessage ] = useState(''),
    [ error, setError ] = useState(false),
    pipelineVersion = useRecoilValue(pipelineVersionState),
    setFormData = useSetRecoilState(formDataState);

    let inputNames = ['path', 'name'];

    const checkForValues = data => {
        const fields = formRef.current.querySelectorAll('form input[type="text"]');
        let counter = 0;

        fields.forEach(field => {
            field.value = field.value.trim(); //kill any whitespace around the input values

            if (field.value === '') {
                counter++
            }
        });

        if (counter > 0) {
            setMessage('Please fill in all fields');
            setError(true);
            setFormData('');
        } else {
            setMessage('Proceed to results page for more info.');
            setError(false);
            setFormData(data);
        }
    }

    const onFormSubmit = e => {
        e.preventDefault();

        let data = new FormData(e.target);

        data.append('pipeline-version', pipelineVersion);

        checkForValues(data);
    };

    return (
        <form
            ref={formRef}
            onSubmit={onFormSubmit}
        >
            <h1>{title}</h1>
            {inputNames.map((name, i) => {
                return <Input key={i} name={name} />
            })}
            <div className={`message${message !== '' ? ' message--visible' : ''}${error ? ' message--error' : ''}`}>
                {message && message}
            </div>
            <input
                type="submit"
                value="Submit"
            />
        </form>
    )
};

export default Form;
