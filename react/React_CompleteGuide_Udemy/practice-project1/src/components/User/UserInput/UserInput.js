import styles from './UserInput.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal';
import React, {useState, useRef} from 'react';

const UserInput = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addFormHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : 'Invalid input',
                message : 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if( +enteredAge < 1 ){
            setError({
                title : 'Invalid age',
                message : 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.setUserData(prevDatas => {
          const updateDatas = [...prevDatas];
          updateDatas.unshift({name: enteredUsername, age: enteredAge, id:Math.random().toString() });
          console.log(updateDatas);
          return updateDatas;
        });
        nameInputRef.current.value = '';
        ageInputRef.current.value= '';
    }

    const errorHandler = () => {
        setError(null);
    };

    return(
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addFormHandler}>                    
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        name="username" 
                        id="username" 
                        ref={nameInputRef}
                    />                
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" 
                        name="age" 
                        id="age" 
                        ref={ageInputRef}
                    />                
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default UserInput;