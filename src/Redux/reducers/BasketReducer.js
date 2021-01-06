const ADD_SUM = 'ADD_SUM';

let initialState = {
    sumprice: 0,
    product: [

    ],
}

const BasketReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_SUM:
            debugger
            return  {
                ...state,
                sumprice: action.sumprice
            }

        default:
            return state;

    }

}

export const AddSum = (price) => ({type: ADD_SUM, price});




export default BasketReducer;