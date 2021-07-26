import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Modal from '../modal/Modal';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: (e) => setValue(e.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}


function AddTodo({onCreate}){

    const input = useInputValue('')

    const styles = {
        form: {
            width: '400px',
            display: 'flex',
            justifyContent: 'space-around'
        }
    };

    function submitHandler(e) {
        e.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }

    return(
        <div style={{margin: '2rem'}}>
            <Modal/>
             <form style={styles.form} onSubmit={submitHandler}>
                <input {...input.bind}/>
                <button type="submit" className="btn btn-primary">Add todo</button>
            </form>
        </div>
       
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo