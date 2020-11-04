import { getToken } from '../services/user/token';

export default {
  namespace: "token",
  state: 0,
  effects: {
    *verifyToken({ payload }, { call }) {
      const result = yield call(getToken, payload);
      console.log(result);
    },
  },
  reducers: {},
};
