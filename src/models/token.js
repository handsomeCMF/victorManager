import { login } from '../services/user/token';
import { isSuccess } from '@utils/utils';

export default {
  namespace: "token",
  state: 0,
  effects: {
    *login({ payload, callback }, { call }) {
      const result = yield call(login, payload);
      if (isSuccess(result)) {
        callback && callback(result.data);
      }
    },
  },
  reducers: {},
};
