import { get, post } from '@utils/http';
import commonApi from '@utils/api';

export async function getAuthorList(data) {
  const list = await get(commonApi.authorApi.getList, data);
  const result = list?.data.map(item => {
    item.__isRouter = item.isRouter ? '是' : '否';
    item.path = item.path || '无';
    item.parentName = item.parentName || '无';
    return item;
  });
  return result;
}

export function addAuthor(data) {
  return post(commonApi.authorApi.addAuthor, data);
}
