import React from 'react';
import {connect} from "react-redux";
import BasketElement from "./BasketElement/BasketElement";
import {AddProduct, AddSum, DeleteProduct} from "../../Redux/reducers/BasketReducer";

const Basket = ({sumprice, product, AddProduct, DeleteProduct, AddSum}) => {

    console.log('product', product)

    return (
        <div>
            <div>Общая сумма покупок {sumprice} BLR</div>
            <hr/>
            {product.map(p => <BasketElement AddSum={AddSum} DeleteProduct={DeleteProduct} key={p.id} id={p.id} name={p.name} img={p.img} price={p.price} />)}

        </div>
    );
};

let mapStateToProps = (state) => ( {
    sumprice:state.BasketReducer.sumprice,
    product:state.BasketReducer.product,
});

export default connect(mapStateToProps, {AddProduct,DeleteProduct, AddSum})(Basket);