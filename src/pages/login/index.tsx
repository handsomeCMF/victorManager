import React from 'react';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Loading, Dispatch, connect, history } from 'umi';
import { setSession } from '@utils/storage';
import commonValues from '../../../submodule/victor_utils_module/src/common';
import index from './index.less';

const { Content, Footer } = Layout;
const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8, offset: 8 },
  },
};

const loginPage = function({
  dispatch,
}: { dispatch: Dispatch}) {
  // const [form] = Form.useForm();

  function onFinish(values: any) {
    dispatch({
      type: 'token/login',
      payload: {
        account: values.username,
        password: values.password,
      },
      callback(data: any) {
        setSession(commonValues.TOKEN, data);
        history.push('/');
      }
    });
  }

  return (
    <Layout className={index.main} >
      <Content>
        <Form
          {...layout}
          className={index.from}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>不要记住我</Checkbox>
            </Form.Item>

            <a className={index.forget}>
              忘记密码
            </a>
          </Form.Item>

          <Form.Item {...layout}>
            <Button
              type="primary"
              htmlType="submit"
              className={index.login}
            >
              登录
            </Button>
            没有账号？<a>点这里注册账号!</a>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ textAlign: 'center'}}>shares manager by caimf 版权归...........所有</Footer>
    </Layout>
  );
};

export default connect(({ loading }: { loading: Loading}) => ({
  loading: loading.effects['token/verifyToken'],
}))(loginPage);
