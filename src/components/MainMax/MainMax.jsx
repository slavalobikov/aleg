import React from 'react';
import Card from "../Main/card/Card";
import s from './../Main/Main.module.css'

const MainMax = ({tools}) => {

    let bal = tools.slice();

    return (
        <div className={s.Main}>
            <Card name={'Под заказ'} price={'???'}
                  desc={'Балалайка является русским народным струнным щипковым инструментом'}
                  img={'https://svgsilh.com/svg_v2/1363011.svg'}
            />
            {bal.sort((a, b) => b.price - a.price).map(t => <Card
                name={t.name} price={t.price} key={t.id} desc={t.desc} img={t.img}
                height={t.hight}
                width={t.width}
                strings={t.strings}
                material={t.material}
                edging={t.edging}
                manufacturer={t.manufacturer}

            />)}
        </div>
    );
};

export default MainMax;