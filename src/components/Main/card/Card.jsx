import React, {useState} from 'react';
import s from './Card.module.css';
import { Button } from 'antd';
import ModalDesc from "../../ModalDesc/ModalDesc";
import {connect} from "react-redux";
import {AddProduct, AddSum} from "../../../Redux/reducers/BasketReducer";
import InfoByBuy from "../../InfoByBuy/InfoByBuy";
import NumberBuy from "../../NumberBuy/NumberBuy";


const Card = (props) => {

    const [model, isModel] = useState(false);
    const [info, isInfo] = useState(false);
    const [number, isNumber] = useState(false);

    const buy = (price) => {
        props.AddSum(price);
        props.AddProduct({id:props.id, name:props.name, price:props.price, img:props.img})
        isInfo(true)
    }

    return (
        <div className={s.Card}>
            <div className={s.imgc}>
                <img className={s.img} src={props.img} alt={props.name}/>
            </div>
            <div className={s.priceAndName}>
                <div onClick={() => {isModel(true)}} className={s.name}>{props.name}</div>
                <div className={s.price}>{props.price} BLR</div>
            </div>

            <div className={s.desc}>{props.desc}</div>
                <div className={s.btns}>
                    {!props.disabled && <>
                    <Button onClick={() => {isModel(true)}} type="default" size={'large'}>
                        Подробнее
                    </Button>
                        <Button onClick={() => buy(props.price) }  type="primary" size={'large'}>
                        Купить
                        </Button>
                    </>}
                    {!!props.disabled && window.screen.availWidth <= 450 && <a href="tel:+375293061150"><Button className={s.zakaz} type="primary" size={'large'}>
                        Заказать
                    </Button></a>}
                    {!!props.disabled && window.screen.availWidth >= 450 && <Button onClick={() => {isNumber(true)}} className={s.zakaz} type="primary" size={'large'}>
                        Заказать
                    </Button>}
                </div>


            {!!model && <ModalDesc {...props} isModel={isModel} />}
            {!!info &&  <InfoByBuy isInfo={isInfo} />}
            {!!number && <NumberBuy isNumber={isNumber} /> }

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tools:state.DataReducer.tools,
    }
};

export default connect(mapStateToProps,
    {AddSum,
    AddProduct})(Card);