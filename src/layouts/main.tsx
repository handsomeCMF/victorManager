import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Tabs, Avatar, Popover, Divider } from 'antd';
import { history, connect } from 'umi';
import mainLess from './main.less';
import {
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

interface menu {
  id: number,
  name: string,
  parentId?: number,
  router?: string,
  isRouter: boolean,
  icon?: string,
  chilerens: menu[],
  [propName: string]: any,
}

const initState = {
  collapsed: false,
};

const main = function(props : any) {
  const {
    children,
    dispatch,
    route,
    userAuthor,
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

  React.useEffect(() => {
    dispatch({
      type: 'author/getUserAuthor',
    });
  }, []);

  const getUserMenu = function(menuList: menu[]) {
    return menuList?.map(item => {
      if (item.isRouter) {
        return (
          <Menu.Item key={item.id} icon={item.icon} onClick={() => history.push(item.router)}>
            {item.name}
          </Menu.Item>
        );
      }

      return (
        <SubMenu key={item.id} icon={item.icon} title={item.name}>
          {getUserMenu(item.children)}
        </SubMenu>
      );
    });

  };

  return (
    <Layout className={mainLess.main}>
      <Sider
        theme="dark"
        width={230}
        collapsible
        collapsed={state.collapsed}
        trigger={null}
      >
        <div className={mainLess.logo} />
        <Menu mode="inline" defaultSelectedKeys={['4']} theme="dark">
          {getUserMenu(userAuthor)}
          <Menu.Item key="101" icon={<UserOutlined />} onClick={() => history.push('/authorization')}>
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

export default connect(({ author } : any) => ({
  userAuthor: author.userAuthor,
}))(main);
