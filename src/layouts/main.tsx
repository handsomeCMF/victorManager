import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, SubMenu, Tabs, Avatar, Popover, Divider } from 'antd';
import { history } from 'umi';
import mainLess from './main.less';
import {
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const initState = {
  collapsed: false,
};

const main = function(props : any) {
  console.log(props, 'props');
  const {
    children,
    route,
  } = props;
  const [state, setState] = useState(initState);

  function toggleCollapse() {
    setState({ collapsed: !state.collapsed });
  }

  const userCenter = (
    <div>
      <a>个人中心</a>
      <Divider />
      <a>修改密码</a>
      <Divider />
      <a>退出登录</a>
    </div>
  );

  return (
    <Layout className={mainLess.main}>
      <Sider
        theme="light"
        width={230}
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
          <Menu.Item key="4" icon={<UserOutlined />} onClick={() => history.push('/authorization')}>
            权限配置
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={mainLess.siteLayout} style={{ padding: 0 }} >
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: mainLess.trigger,
            onClick: toggleCollapse,
          })}

          <div className={mainLess.headerRight}>
            <Popover placement="bottom" content={userCenter} trigger="click">
              <Avatar icon={<UserOutlined />} />
            </Popover>
          </div>
        </Header>
        <Content style={{ margin: '0 10px' }}>
          <Tabs
            type="editable-card"
            hideAdd
          >
            <TabPane tab="工作台" key={1}>
              <div className={mainLess.pageHeader}>
                <Breadcrumb style={{ margin: '0 0 16px 0', height: 'auto' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className={mainLess.siteLayout} style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </TabPane>
            <TabPane tab="工作台" key={2}>
              <Breadcrumb style={{ margin: '16px 0', height: 'auto' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>

              <div className={mainLess.siteLayout} style={{ padding: 24, minHeight: 360 }}>
                {children}
              </div>
            </TabPane>
          </Tabs>
        </Content>
        <Footer style={{ textAlign: 'center' }}>shares manager by caimf</Footer>
      </Layout>
    </Layout>
  );
};

export default main;
