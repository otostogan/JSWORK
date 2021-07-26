import React from 'react';
import './post-status-filter.css'

import {Button} from 'reactstrap'

export default class PostStatusFilter extends React.Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {
                name: 'all',
                label: 'Все'
            },
            {
                name: 'like',
                label: 'Понравилось'
            }
        ]
    }
    render() {
        const btns = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <Button 
                    className={clazz}
                    key={name}
                    type="button"
                    onClick={() => this.props.onFilterSelect(name)}
                    >{label}</Button>
            )
        });
        return(
            <div className="btn-group">
                {btns}
            </div>
        )
    }
}
