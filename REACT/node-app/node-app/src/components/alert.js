import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    if(!alert){
        return null
    }

    return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Внимание!</strong> {alert.text}
        <button type="button" onClick={hide} className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    )
}

export default Alert