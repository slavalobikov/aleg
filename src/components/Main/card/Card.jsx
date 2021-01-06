import React, {useState} from 'react';
import s from './Card.module.css';
import { Button } from 'antd';
import ModalDesc from "../../ModalDesc/ModalDesc";
import {AddSum, AddSumThunk} from "../../../Redux/reducers/BasketReducer";


const Card = (props) => {

    const [model, isModel] = useState(false);

    const buy = (price) => {

        props.AddSum(price);
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
                    <Button onClick={() => {isModel(true)}} type="default" size={'large'}>
                        Подробнее
                    </Button>
                    <Button onClick={() => buy(props.price)} type="primary" size={'large'}>
                        Купить
                    </Button>
                </div>


            {!!model && <ModalDesc {...props} isModel={isModel} />}


        </div>
    );
};

export default Card;