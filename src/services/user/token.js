import { post } from '@utils';

export function getToken({ account, password }) {
  return post('', { account, password });
}
