import React from 'react';
import s from './InfoByBuy.module.css'
import {Button} from "antd";

const InfoByBuy = ({isInfo}) => {
    return (
        <div className={s.InfoByBuy}>
            <div className={s.wrap}>
                <div className={s.mod}>
                Покупка помещена в корзину!
                <div>
                    <Button className={s.btn} onClick={() => {isInfo(false)}} type="primary" size={'large'}>
                        Подтвердить
                    </Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default InfoByBuy;