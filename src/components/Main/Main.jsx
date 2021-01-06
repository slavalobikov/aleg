import React from 'react';
import Card from "./card/Card";
import s from './Main.module.css'

const Main = ({tools, AddSum}) => {

    return (
        <div>
            <div className={s.Main}>
                <Card name={'Под заказ'} price={'???'}
                      desc={'Балалайка является русским народным струнным щипковым инструментом'}
                      img={'https://svgsilh.com/svg_v2/1363011.svg'}
                />
                {tools.map(t =>
                    <Card name={t.name} price={t.price} key={t.id} desc={t.desc} img={t.img}
                          height={t.hight}
                          width={t.width}
                          strings={t.strings}
                          material={t.material}
                          edging={t.edging}
                          manufacturer={t.manufacturer}
                          AddSum={AddSum}
                    />

            )}
            </div>
        </div>
    );
};

export default Main;