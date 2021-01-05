import React from 'react';
import Card from "./card/Card";
import s from './Main.module.css'

const Main = ({tools}) => {

    console.log(tools)
    return (
        <div>
            <div className={s.Main}>
                <Card name={'Под заказ'} price={'100'}
                      desc={'Балалайка является русским народным струнным щипковым инструментом'}
                      img={'https://svgsilh.com/svg_v2/1363011.svg'}
                />
                {tools.map(t =>
                    <Card name={t.name} price={t.price} key={t.id} desc={t.desc} img={t.img} />
            )}
                {/*<Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />
                <Card img={'https://i.ibb.co/HqDP3L1/1.jpg'} />*/}
            </div>
        </div>
    );
};

export default Main;