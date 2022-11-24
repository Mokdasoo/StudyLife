import { useState } from "react";

const useInput = (validateValueFunc) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValueFunc(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };
    const valueBlurHandler = event => {
        setIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };


    return {
        value : enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
};

export default useInput