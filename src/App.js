import React from 'react'
import { Layout, Menu} from 'antd';
import {Link, Route, withRouter} from "react-router-dom";
import {ShoppingCartOutlined, ShopOutlined, ToolOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css';
import HeaderComponent from "./components/Header/Header";
import Main from "./components/Main/Main";
import {connect} from "react-redux";
import MainMax from "./components/MainMax/MainMax";
import MainMinx from "./components/MainMin/MainMinx";
import Basket from "./components/ Basket/ Basket";
import {compose} from "redux";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (

        <Layout  style={{ minHeight: '100vh' }}>

          {window.screen.availWidth >= 450 &&  <Sider  collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<ShopOutlined />} >
                  <Link to={'/'}>Главная</Link>
                </Menu.Item>

                <SubMenu key="sub1"  title="Сортировка" icon={<ToolOutlined />}>
                  <Menu.Item key="3">
                    <Link to={'/max'}>Сначала дорогие</Link></Menu.Item>
                  <Menu.Item key="4"><Link to={'/min'}>Сначала дешевые</Link></Menu.Item>
                </SubMenu>

                <Menu.Item key="9" icon={<ShoppingCartOutlined />}>
                  <Link to={'/basket'}>Корзина</Link>
                </Menu.Item>
              </Menu>

            </Sider>}



          <Layout className="site-layout">

            <HeaderComponent sumprice={this.props.sumprice} />

            <Content style={{ margin: '0 16px' }}>

              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                <Route exact path={'/'}  render={() =>  <Main tools={this.props.tools}  />} />
                <Route  path={'/max'}  render={() =>  <MainMax tools={this.props.tools} />} />
                <Route  path={'/min'}  render={() =>  <MainMinx tools={this.props.tools} />} />
                <Route  path={'/basket'}  render={() => <Basket />} />

              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>github:slavalobikov ©2020 Created by 'BNTU'</Footer>
          </Layout>
        </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tools:state.DataReducer.tools,
    sumprice: state.BasketReducer.sumprice
  }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter,

)(App) ;

