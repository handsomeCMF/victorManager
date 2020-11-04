import { post } from '@utils/http';
import commonApi from '@utils/api';

export function getToken(data) {
  return post(commonApi.userApi.token, data);
}
