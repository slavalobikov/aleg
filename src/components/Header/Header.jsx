import React from 'react';
import s from './Header.module.css'
import {Header} from "antd/lib/layout/layout";

import {ShoppingCartOutlined} from '@ant-design/icons'




const HeaderComponent = () => {
    return (
        <Header className={"site-layout-background"} style={{ padding: 0 }} >
            <span className={s.header}>
                <a href="tel:+375293061150">+375293061150</a>
            <ShoppingCartOutlined className={s.shopIcons} />
            <span className={s.shopIcons}>143 $</span>
            </span>

        </Header>
    );
};

export default HeaderComponent;