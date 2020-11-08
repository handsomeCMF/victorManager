import { post } from '@utils/http';
import commonApi from '@utils/api';

export function login(data) {
  return post(commonApi.userApi.token, data);
}
