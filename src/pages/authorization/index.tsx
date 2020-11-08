import React, { useEffect, useState } from 'react';
import { Loading, Dispatch, connect } from 'umi';
import { Table, Button } from 'antd';
import AddAuthorModal from './AddAuthorModal';

const columns = [
  {
    title: '序号',
    key: '',
  },
  {
    title: '菜单名称',
    key: '',
  },
  {
    title: '上级菜单名称',
    key: '',
  },
  {
    title: '是否路由',
    key: '',
  },
  {
    title: '路由地址',
    key: '',
  },
];

const initState = {
  showAddAuthorModal: false,
};

const authorizationPage = function({
  dispatch,
  loading,
}: any) {

  const [state, setState] = useState(initState);

  useEffect(() => {
    dispatch({
      type: 'author/getAuthorList',
      payload: '',
    });
  }, []);

  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={() => setState({ showAddAuthorModal: true})}
      >
        添加路由
      </Button>

      <Table
        loading={loading}
        columns={columns}
        dataSource={[]}
      />

      <AddAuthorModal
        visible={state.showAddAuthorModal}
        onCancel={() => setState({ showAddAuthorModal: false })}
      />
    </React.Fragment>
  );
};

export default connect(({ loading }: {loading: Loading}) => ({
  loading: loading.effects['author/getAuthorList'],
}))(authorizationPage);
