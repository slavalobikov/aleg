import React from 'react';
import s from './Header.module.css'
import {Header} from "antd/lib/layout/layout";

import {ShoppingCartOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";


const HeaderComponent = (props) => {
    return (
        <Header className={"site-layout-background"} style={{padding: 0}}>
            {window.screen.availWidth >= 450 && <span className={s.header}>
                <span className={s.shopIcons}>{props.sumprice} $</span>
            </span>}
            {window.screen.availWidth <= 450 && <span className={s.header}>
                <a href="tel:+375293061150">+375293061150</a>
                <Link to={'/basket'}>
                    <ShoppingCartOutlined className={s.shopIcons}/>
                    <span className={s.shopIcons}>{props.sumprice} $</span>
                </Link>
            </span>}

        </Header>
    );
};

export default HeaderComponent;