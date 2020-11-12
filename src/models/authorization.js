import { getAuthorList, addAuthor, getMenuList } from '../services/author/author';

const ACTION_SET_DATALIST = 'setDataList';
const ACTION_SET_MENULIST = 'setMenuList';

export default {
  namespace: "author",
  state: {
    dataList: [],
    menuList: [],
  },
  effects: {
    *getAuthorList({ payload, callback }, { call, put }) {
      const result = yield call(getAuthorList, payload);
      yield put({
        type: ACTION_SET_DATALIST,
        payload: result,
      });
      callback && callback(result.data);
    },

    *addAuthor({ payload, callback }, { call }) {
      const result = yield call(addAuthor, payload);
      callback && callback(result.data);
    },

    *getMenuList({ payload, callback }, { call, put }) {
      const result = yield call(getMenuList, payload);
      yield put({
        type: ACTION_SET_MENULIST,
        payload: result.data,
      });
      callback && callback(result.data);
    }
  },
  reducers: {
    setDataList(state, { payload }) {
      return {
        ...state,
        dataList: payload,
      };
    },

    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    }
  },
};
