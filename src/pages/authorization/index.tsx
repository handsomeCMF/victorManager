import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Table, Button } from 'antd';
import AddAuthorModal from './AddAuthorModal';

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
  },
  {
    title: '菜单名称',
    dataIndex: 'name',
  },
  {
    title: '上级菜单名称',
    dataIndex: 'parentName',
  },
  {
    title: '是否路由',
    dataIndex: '__isRouter',
  },
  {
    title: '路由地址',
    dataIndex: 'path',
  },
];

const initState = {
  showAddAuthorModal: false,
};

const authorizationPage = function({
  dispatch,
  loading,
  dataList,
}: any) {

  const [state, setState] = useState(initState);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    dispatch({
      type: 'author/getAuthorList',
      payload: '',
    });
  }

  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={() => setState({ showAddAuthorModal: true})}
      >
        添加路由
      </Button>

      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={dataList}
      />

      <AddAuthorModal
        visible={state.showAddAuthorModal}
        onCancel={() => setState({ showAddAuthorModal: false })}
        onOk={fetchData}
      />
    </React.Fragment>
  );
};

export default connect(({ loading, author }: any) => ({
  loading: loading.effects['author/getAuthorList'],
  dataList: author.dataList,
}))(authorizationPage);
