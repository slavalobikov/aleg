import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import s from './ModalDesc.module.css'
import {Button} from "antd";
import InfoByBuy from "../InfoByBuy/InfoByBuy";

const ModalDesc = (props) => {

    const [info, isInfo] = useState(false)
    const buy = (price) => {
        props.AddSum(price)
        isInfo(true)
        props.isModel(false)
        props.AddProduct({id:props.id, name:props.name, price:props.price, img:props.img})
    }

    return (
       <div className={s.modal}>
           {ReactDOM.createPortal(
               <div className={s.modal}>
                   <div className={s.wrap}>
                       <div><img className={s.img} src={props.img} alt={props.img}/></div>
                       <div className={s.info}>
                           <div>
                               <span><b>Высота:</b></span>
                               <span> {props.height} мм</span>
                           </div>
                           <div>
                               <span><b>Ширина:</b></span>
                               <span> {props.width} мм у основания</span>
                           </div>
                           <div>
                               <span><b>Струнны:</b></span>
                               <span> {props.strings} штуки</span>
                           </div>
                           <div>
                               <span><b>Материал:</b></span>
                               <span> {props.material} </span>
                           </div>
                           <div>
                               <span><b>Окантовка:</b></span>
                               <span> {props.edging} </span>
                           </div>
                           <div>
                               <span><b>Производитель:</b></span>
                               <span> {props.manufacturer} </span>
                           </div>
                           <div className={s.priceAndName}>
                               <div className={s.name}>{props.name}</div>
                               <div className={s.price}>{props.price} BLR</div>
                           </div>
                           <div className={s.butt}>
                               {!props.disabled && <>
                                   {!props.product.find(item => item.id === props.id) && <Button className={s.back} onClick={() => buy(props.price) }  type="primary" size={'large'}>
                                       Купить
                                   </Button>}
                                   {!!props.product.find(item => item.id === props.id) && <Button className={s.back} onClick={() => buy(props.price) } disabled  type="primary" size={'large'}>
                                       Уже в корзине
                                   </Button>}
                               </>}
                           </div>
                           <div className={s.butt}>
                               <Button className={s.back} onClick={() => {props.isModel(false)}} type="default" size={'large'}>
                                   Вернуться к покупкам
                               </Button>
                           </div>
                       </div>
                   </div>
                   {!!info &&  <InfoByBuy isInfo={isInfo} />}
               </div>,
               document.getElementById('portal')
           )}
       </div>
    );
};

export default ModalDesc;