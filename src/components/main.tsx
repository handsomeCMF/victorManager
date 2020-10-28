import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import mainLess from './main.less';
import { connect } from 'dva';
import {
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const initState = {
  collapsed: false,
};

const main = function(props : any) {
  console.log(props, '---props---');
  const {
    childern,
    route,
  } = props;
  const [state, setState] = useState(initState);

  function toggleCollapse() {
    setState({ collapsed: !state.collapsed });
  }

  return (
    <Layout>
      <Sider
        theme="light"
        width={240}
        collapsible 
        collapsed={state.collapsed}
        trigger={null}
      >
        <div className={mainLess.logo} />
        <Menu mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={mainLess.siteLayout} style={{ padding: 0 }} >
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: mainLess.trigger,
            onClick: toggleCollapse,
          })}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={mainLess.siteLayout} style={{ padding: 24, minHeight: 360 }}>
            {childern}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>shares manager by caimf</Footer>
      </Layout>
    </Layout>
  );
};

export default main;
