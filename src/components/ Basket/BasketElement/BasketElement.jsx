import React from 'react';
import s from './BasketElement.module.css'

import {DeleteOutlined, } from '@ant-design/icons'


const BasketElement = (props) => {

    const DeleteFunction = (price) => {
        props.DeleteProduct(props.id)
        props.AddSum(-price)
    }

    return (
        <div>
           <div className={s.flex}>
            <div className={s.el}>
                <div><img className={s.img} src={props.img} alt="bala"/></div>
                <div className={s.ml}><span>{props.name}</span></div>
            </div>

                <div>
                    <span className={s.mr}>{props.price} BLR</span>
                    <DeleteOutlined onClick={() => DeleteFunction(props.price)} className={s.delete} />

                </div>

            </div>
            <hr/>
        </div>
    );
};

export default BasketElement;