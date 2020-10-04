import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Styles from './index.less';
import { sideRoutes } from 'config/routes';

const { Header, Sider, Content } = Layout;

const initialState = {
  collapsed: false,
};

function mainLayout() {
  const [state, setState] = useState(initialState);

  const toggleSider = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={state.collapsed}>
        <div className={Styles.logo}></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: Styles.trigger,
              onClick: toggleSider,
            },
          )}
        </Header>
        <Content className={Styles.content}>Content</Content>
      </Layout>
    </Layout>
  );
}

export default mainLayout;
