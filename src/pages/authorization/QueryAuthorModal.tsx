import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Modal, Input, Table } from 'antd';
import { RowSelectionType, Key } from 'antd/lib/table';

const { Search } = Input;
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'name',
  },
  {
    title: '上级菜单名称',
    dataIndex: 'name',
  }
];

const initState = {
  selectedRow: {},
  selectedRowKeys: [''],
};

const QueryAuthorModal = function({
  visible,
  onCancle,
  dispatch,
  menuList,
  loading,
  onSelect,
}: any) {

  const [state, setState] = useState(initState);

  function onRouterSearch() {
    dispatch({
      type: 'author/getMenuList',
      payload: {
        page: 1,
        perPage: 5,
      },
    });
  }

  useEffect(() => {
    onRouterSearch();
  }, []);

  const rowSelection = {
    type: "radio" as RowSelectionType,
    selectedRowKeys: state.selectedRowKeys as Key,
  };

  function onRowClick(record: any) {
    setState({
      selectedRow: record,
      selectedRowKeys: [record.id],
    });
  }

  function onRowDoubleClick(record: any) {
    if (!record) { return; }
    onSelect(record);
    onCancle();
  }

  return (
    <Modal
      title="路由选择"
      width={600}
      visible={visible}
      onCancel={onCancle}
      onOk={() => onRowDoubleClick(state.selectedRow)}
    >
      <Search
        placeholder="路由名称"
        onSearch={onRouterSearch}
      />

      <Table
        rowKey="id"
        dataSource={menuList}
        columns={columns}
        loading={loading}
        rowSelection={rowSelection}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
          onDoubleClick:() => onRowDoubleClick(record)
        })}
      />

    </Modal>
  );
};

export default connect(({ author, loading }: any) => ({
  menuList: author.menuList,
  loading: loading.effects['author/getMenuList'],
}))(QueryAuthorModal);
