import { commonApi } from '@utils';

export default {
  namespace: "token",
  state: [],
  effects: {
    *getToken(payload, { call }) {
      return call(commonApi.userApi, payload);
    },
  },
  reducers: {},
};
