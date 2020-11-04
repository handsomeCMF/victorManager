import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Loading, Dispatch, connect } from 'umi';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const commonStyle = { width: 450};

const loginPage = ({
  dispatch,
}: {dispatch: Dispatch}) => {
  // const [form] = Form.useForm();

  function onFinish(values: any) {
    dispatch({
      type: 'token/verifyToken',
      payload: values,
    });
  }

  return (
    <Form
      {...layout}
      style={{ marginTop: 200 }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!'
          }
        ]}
      >
        <Input
          style={commonStyle}
        />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!'
          }
        ]}
      >
        <Input.Password
          style={commonStyle}
        />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(({ loading }: { loading: Loading}) => ({
  loading: loading.effects['token/verifyToken'],
}))(loginPage);
