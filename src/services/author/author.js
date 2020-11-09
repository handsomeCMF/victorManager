import { get } from '@utils/http';
import commonApi from '@utils/api';

export function getAuthorList(data) {
  return get(commonApi.authorApi.getList, data);
}

export function addAuthor(data) {
  return post(commonApi.authorApi.addAuthor, data);
}
