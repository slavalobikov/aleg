import React from 'react'
import { Layout, Menu} from 'antd';
import {Link, Route} from "react-router-dom";
import {ShoppingCartOutlined, ShopOutlined, ToolOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css';
import HeaderComponent from "./components/Header/Header";
import Main from "./components/Main/Main";
import {connect} from "react-redux";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
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
                {/*<Menu.Item key="2" >
                  Option 2
                </Menu.Item>*/}
                <SubMenu key="sub1"  title="Сортировка" icon={<ToolOutlined />}>
                  <Menu.Item key="3">Сначала дорогие</Menu.Item>
                  <Menu.Item key="4">Сначала дешевые</Menu.Item>
                </SubMenu>
{/*
                <SubMenu key="sub2"  title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
*/}
                <Menu.Item key="9" icon={<ShoppingCartOutlined />}>
                  Корзина
                </Menu.Item>
              </Menu>

            </Sider>}



          <Layout className="site-layout">

            <HeaderComponent />

            <Content style={{ margin: '0 16px' }}>

              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                <Route path={''}  render={() =>  <Main tools={this.props.tools} />} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ilya Makovich ©2020 Created by 'BNTU'</Footer>
          </Layout>
        </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tools:state.DataReducer.tools,
  }
};

export default connect(mapStateToProps, {})(App);

