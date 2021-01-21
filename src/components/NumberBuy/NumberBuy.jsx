import React from 'react';
import s from './NumberBuy.module.css'
import {Button} from "antd";

const NumberBuy = ({isNumber}) => {
    return (
        <div className={s.NumberBuy}>
                <div className={s.wrap}>
                    <div className={s.mt}>Что бы совершить заказ, позвоните по номеру: </div>
                    <div className={s.mt}><a href="tel:+375293061150">+375293061150</a></div>
                    <div className={s.mt}><Button className={s.btn} onClick={() => {isNumber(false)}} type="primary" size={'large'}>
                        Вернуться к покупкам
                    </Button></div>
                </div>

            )}

        </div>
    );
};

export default NumberBuy;