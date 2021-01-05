import React from 'react';
import s from './Card.module.css';
import { Button } from 'antd';


const Card = ({name, img, price, desc}) => {
    return (
        <div className={s.Card}>
            <div className={s.imgc}>
                <img className={s.img} src={img} alt="bala"/>
            </div>
            <div className={s.priceAndName}>
                <div className={s.name}>{name}</div>
                <div className={s.price}>{price} BLR</div>
            </div>

            <div className={s.desc}>{desc}</div>
                <div className={s.btns}>
                    <Button type="default" size={'large'}>
                        Подробнее
                    </Button>
                    <Button type="primary" size={'large'}>
                        Купить
                    </Button>
                </div>


        </div>
    );
};

export default Card;