import React, {useState} from 'react';
import {connect} from "react-redux";
import BasketElement from "./BasketElement/BasketElement";
import {AddProduct, AddSum, DeleteProduct} from "../../Redux/reducers/BasketReducer";
import {Button} from "antd";
import NumberBuy from "../NumberBuy/NumberBuy";
import {Link} from "react-router-dom";
import s from './Basket.module.css';

const Basket = ({sumprice, product, AddProduct, DeleteProduct, AddSum}) => {

    const [info, setInfo] = useState(false)

    return (
        <div>
            <div>Общая сумма покупок {sumprice} BLR</div>
            <hr/>
            {product.map(p => <BasketElement AddSum={AddSum} DeleteProduct={DeleteProduct} key={p.id} id={p.id} name={p.name} img={p.img} price={p.price} />)}

            <div className={s.fl}>
                {!!product[0] && <Button className={s.btn} onClick={() => setInfo(true)}  type="primary" size={'large'}>
                    Оплатить
                </Button>}

                <Link to={'/'}>
                    <Button className={s.btn} type="primary" size={'large'}>
                        Посмотреть еще товары
                    </Button>
                </Link>
            </div>

            {!!info && <NumberBuy isNumber={setInfo} /> }



        </div>
    );
};

let mapStateToProps = (state) => ( {
    sumprice:state.BasketReducer.sumprice,
    product:state.BasketReducer.product,
});

export default connect(mapStateToProps, {AddProduct,DeleteProduct, AddSum})(Basket);