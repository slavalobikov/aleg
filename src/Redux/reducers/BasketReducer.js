const ADD_SUM = 'ADD_SUM';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

let initialState = {
    sumprice: 0,
    product: [

    ],
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_SUM:
            return  {
                ...state,
                sumprice:[Number(state.sumprice) + Number(action.price)]
            }
        case ADD_PRODUCT:
            return  {
                ...state,
                product: [...state.product, action.bal]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product:state.product.filter(item => item.id !== action.id)
            }

        default:
            return state;

    }

}

export const AddSum = (price) => ({type: ADD_SUM, price});
export const AddProduct = (bal) => ({type:ADD_PRODUCT, bal});
export const DeleteProduct = (id) => ({type:DELETE_PRODUCT, id})




export default BasketReducer;