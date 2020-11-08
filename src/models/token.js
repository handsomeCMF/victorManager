import { login } from '../services/user/token';

export default {
  namespace: "token",
  state: 0,
  effects: {
    *login({ payload, callback }, { call }) {
      const result = yield call(login, payload);
      callback && callback(result.data);
    },
  },
  reducers: {},
};
