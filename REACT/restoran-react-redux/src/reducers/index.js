const initialState = {
    menu: [],
    loading: true,
    error: false, 
    items: [],
    total: 0,
    modal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload, 
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu, 
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item=> item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: new Date().getTime()
            };
            console.log(newItem.id);
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem,
                ],
                total: state.total + newItem.price
            };
        case 'ITEM_REMOVE_FROM_CART':
            const inx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === inx);
            const price = state.items[itemIndex]['price'] 
            console.log(price);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - price
            };
        case 'SHOW_MODAL':
            document.body.style.overflow = 'hidden';
            const modal = document.querySelector('.modal');
            modal.classList.add('show');
            return {
                ...state,
                modal: true
            };
        case 'CLOSE_MODAL':
            document.body.style.overflow = '';
            document.querySelector('.modal').classList.remove('show');
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
}

export default reducer;