import styles from './UserInput.module.css';

const UserInput = (props) => {


    
    return(
        <div className={styles['form-control']}>
            <div className={styles['form-control__inner']}>
                <form onSubmit={props.addFormHandler}>
                    <p>
                        <label htmlFor="username">Username</label><br/>
                        <input type="text" name="username" id="username"/>
                    </p>
                    <p>
                        <label htmlFor="age">Age (Years)</label><br/>
                        <input type="number" name="age" id="age"/>
                    </p>
                    <button type="submit" >Add User</button>
                </form>
            </div>
            
        </div>
    );
}

export default UserInput;