import React, {useState} from 'react';
import s from './Card.module.css';
import { Button } from 'antd';
import ModalDesc from "../../ModalDesc/ModalDesc";


const Card = (props) => {

    const [model, isModel] = useState(false);


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
                    <Button type="primary" size={'large'}>
                        Купить
                    </Button>
                </div>


            {!!model && <ModalDesc {...props} isModel={isModel} />}


        </div>
    );
};

export default Card;