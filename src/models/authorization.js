import { 
  getAuthorList,
  addAuthor,
  getMenuList,
  getUserAuthor,
} from '../services/author/author';

const ACTION_SET_DATALIST = 'setDataList';
const ACTION_SET_MENULIST = 'setMenuList';
const ACTION_SET_USERAUTHOR = 'setUserAuthor';

export default {
  namespace: "author",
  state: {
    dataList: [],
    menuList: [],
    userAuthor: [],
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
    },

    // 获取用户权限
    *getUserAuthor({ payload, callback }, { call, put }) {
      const result = yield call(getUserAuthor, payload);
      yield put({
        type: ACTION_SET_USERAUTHOR,
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
    },

    setUserAuthor(state, { payload }) {
      return {
        ...state,
        userAuthor: payload,
      };
    },
  },
};
