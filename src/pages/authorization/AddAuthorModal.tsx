import React from 'react';
import { Modal, Form, Input } from 'antd';
import { connect } from 'umi';

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const addAuthorModal = function({
  dispatch,
  visible,
  onCancel,
  loading,
}: any) {

  const [form] = Form.useForm();

  async function submitForm() {
    const values = await form.validateFields();
    console.log(values);
  }

  return (
    <Modal
      title="路由配置"
      visible={visible}
      onOk={submitForm}
      onCancel={onCancel}
      confirmLoading={loading}
      width={650}
    >
      <Form form={form} {...layout}>
        <Form.Item
          label="路由名"
          name="router"
          rules={[{ required: true, message: '请输入路由菜单名称!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="路由地址"
          name="path"
          rules={[{ required: true, message: '请输入路由地址!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="父路由"
          name="parent"
          rules={[{ required: true, message: '请输入路由地址!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default connect(({ loading }: any) => ({
  loading: loading.effects['author/getAuthorList'],
}))(addAuthorModal);
