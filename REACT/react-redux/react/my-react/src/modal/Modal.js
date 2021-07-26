import React from 'react';
import './modal.css';

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
            <>
            <button onClick={()=> this.setState({isOpen:true})} className="btn btn-primary">Open Modal</button>
            
            {this.state.isOpen && <div className="modal">
                <div className="modal-body">
                    <h1>Modal Title</h1>
                    <p>I am awesome modal!</p>
                    <button onClick={()=> this.setState({isOpen:false})} className="btn btn-primary">Close Modal</button>
                </div>
            </div>}
            </>
        )
    }
}