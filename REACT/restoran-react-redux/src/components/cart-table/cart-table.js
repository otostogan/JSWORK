import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCard, showModal} from '../../actions'
import Modal from '../modal'

const CartTable = ({items, deleteFromCard, showModal}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        return (
                            <OneCart key={item.id} item={item} deleteFromCard={deleteFromCard}/>
                        )
                    })
                }
            </div>
            <div>
                {items.length > 0 ? <button onClick={()=> showModal()} className="cart__btn">Make order</button> : null}
            </div>
            <Modal/>
        </>
    );
};


const OneCart = ({item, deleteFromCard}) =>{
    const {title, price, url, id} = item;
    return (
        <div className="cart__item">
            <img src={url} className="cart__item-img" alt={title}></img>
            <div className="cart__item-title">{title}</div>
            <div className="cart__item-price">{price}$</div>
            <div onClick={()=> deleteFromCard(id)} className="cart__close">&times;</div>
        </div>
    )
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCard,
    showModal
}



export default connect(mapStateToProps, mapDispatchToProps)(CartTable);