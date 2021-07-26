import React from 'react';
import './modal.sass';
import {connect} from 'react-redux';
import {closeModal} from '../../actions';


const Modal = ({closeModal}) =>{
    return(
        <div className="modal">
            <div className="modal__dialog">
                <div className="container">
                    <div className="modal__content">
                        <div onClick={()=> closeModal()} className="modal__close">X</div>
                        <div className="modal__content-title">
                            ОСТАВЬТЕ ЗАЯВКУ
                        </div>
                        <div className="modal__content-subtitle">
                            в кратчайшее время я свяжусь с Вами
                        </div>
                        <form action="#" className="modal__form">
                            <div className="modal__form-inputs">
                                <input type="text" placeholder="Ваше имя" className="modal__form-input" name="modalname"/>
                                <input type="text" placeholder="Ваш телефон" className="modal__form-input mbn" name="modalphone"/>
                            </div>
                            <div>
                                <button className="btn3" >отправить заявку</button>
                            </div>
                            <div className="advantages__form-warning">
                                Отправляя форму, Вы даете согласие
                                на обработку Ваших персональных данных
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    closeModal
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);