import React from 'react';
import {connect} from "react-redux";

const Basket = ({sumprice}) => {
    return (
        <div>
            Общая сумма покупок {sumprice} BLR
        </div>
    );
};

let mapStateToProps = (state) => ( {
    sumprice:state.BasketReducer.sumprice
});

export default connect(mapStateToProps, {})(Basket);