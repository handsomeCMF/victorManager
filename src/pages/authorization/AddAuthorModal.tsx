import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Select } from 'antd';
import { connect } from 'umi';
import QueryAuthorModal from './QueryAuthorModal';
import { EllipsisOutlined } from '@ant-design/icons';

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

const initState = {
  showPath: false,
  showQueryAuthorModal: false,
};

const addAuthorModal = function({
  dispatch,
  visible,
  onCancel,
  onOk,
  loading,
}: any) {

  const [form] = Form.useForm();
  const [state, setState] = useState(initState);

  async function submitForm() {
    const values = await form.validateFields();
    dispatch({
      type: 'author/addAuthor',
      payload: {
        router: values.router,
        path: values.path,
        isRouter: values.isRouter,
        parentId: values.parent.value,
      },
      callback() {
        onCancel();
        onOk && onOk();
      }
    });
  }

  function onChange() {
    setState({ ...state, showPath: !state.showPath });
  }

  function toggleQueryAuthorModal() {
    setState({ ...state, showQueryAuthorModal: !state.showQueryAuthorModal});
  }

  function onAuthorSelect(record: any) {
    form.setFieldsValue({
      parent: {
        value: record.id,
        label: record.name,
      }
    });
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

        {state.showPath && (
          <Form.Item
            label="路由地址"
            name="path"
            rules={[{ required: true, message: '请输入路由地址!' }]}
          >
            <Input
            />
          </Form.Item>
        )}

        <Form.Item
          label="父路由"
          name="parent"
        >
          <Select
            labelInValue
            suffixIcon={
              <EllipsisOutlined
                style={{ fontSize: 16, color: 'black' }}
                onClick={toggleQueryAuthorModal}
              />
            }
          />
        </Form.Item>

        <Form.Item
          label=" "
          colon={false}
          valuePropName="checked"
          name="isRouter"
        >
          <Checkbox value={1} onChange={onChange} >是否路由</Checkbox>
        </Form.Item>
      </Form>

      {state.showQueryAuthorModal && (
        <QueryAuthorModal
          visible={state.showQueryAuthorModal}
          onCancle={toggleQueryAuthorModal}
          onSelect={onAuthorSelect}
        />
      )}
    </Modal>
  );
};

export default connect(({ loading }: any) => ({
  loading: loading.effects['author/getAuthorList'],
}))(addAuthorModal);
