import { post } from '../../../submodule/src/http';

export function getToken({ account, password }) {
  return post('', { account, password }); 
}