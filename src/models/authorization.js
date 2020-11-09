import { getAuthorList, addAuthor } from '../services/author/author';

export default {
  namespace: "author",
  state: 0,
  effects: {
    *getAuthorList({ payload, callback }, { call }) {
      const result = yield call(getAuthorList, payload);
      callback && callback(result.data);
    },

    *addAuthor({ payload, callback }, { call }) {
      const result = yield call(addAuthor, payload);
      callback && callback(result.data);
    }
  },
  reducers: {},
};
