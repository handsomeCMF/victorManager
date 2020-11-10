import { getAuthorList, addAuthor } from '../services/author/author';

const ACTION_SET_DATALIST = 'setDataList';

export default {
  namespace: "author",
  state: {
    dataList: [],
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
    }
  },
  reducers: {
    setDataList(state, { payload }) {
      return {
        ...state,
        dataList: payload,
      };
    }
  },
};
