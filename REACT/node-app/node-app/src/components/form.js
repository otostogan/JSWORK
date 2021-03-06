import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';


const Form = () =>{

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = e => {
        e.preventDefault();

        alert.show(value, 'succes')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Введите название заметки"
                    onChange={e => setValue(e.target.value)}
                    />
            </div>
        </form>
    )
}

export default Form