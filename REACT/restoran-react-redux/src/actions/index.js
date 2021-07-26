const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}

const menuEror = () =>{
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCard = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCard = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const totalPriceToCart = () => {
    return {
        type: 'TOTAL_PRICE'
    }
}

const showModal = () => {
    return {
        type: 'SHOW_MODAL'
    }
}

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}
const postData = (url, data) => {
    return {
        type: 'POST_DATA_MODAL',
        payload: url,
        data: data
    }
}

export {
    menuLoaded,
    menuRequested,
    menuEror,
    addedToCard,
    deleteFromCard,
    totalPriceToCart,
    showModal, 
    closeModal,
    postData
};