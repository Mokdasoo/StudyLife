import {useState} from 'react';
import Output from './Output';


const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(!changedText);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText ? <Output>It's good to see you!</Output> : <Output>Changed!</Output> }
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
        
    );
};
export default Greeting;