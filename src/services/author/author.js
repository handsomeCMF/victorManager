import { get } from '@utils/http';
import commonApi from '@utils/api';

export function getAuthorList(data) {
  return get(commonApi.authorApi.getList, data);
}
