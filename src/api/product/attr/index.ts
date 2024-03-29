import request from '@/utils/request'
import { CategoryResponseData, AttrResponseData, Attr } from './type'
enum API {
  GETCATEGORY1_URL = '/admin/product/getCategory1',
  GETCATEGORY2_URL = '/admin/product/getCategory2/',
  GETCATEGORY3_URL = '/admin/product/getCategory3/',
  ATTRLIST_URL = '/admin/product/attrInfoList/',
  ADDORUPDATEATTR_URL = '/admin/product/saveAttrInfo',
  DELETEATTR_URL = '/admin/product/deleteAttr/',
}

export const requestC1 = () => {
  return request.get<any, CategoryResponseData>(API.GETCATEGORY1_URL)
}
export const requestC2 = (id: number | string) => {
  if (!id) return void 0
  return request.get<any, CategoryResponseData>(API.GETCATEGORY2_URL + id)
}

export const requestC3 = (id: number | string) => {
  if (!id) return void 0
  return request.get<any, CategoryResponseData>(API.GETCATEGORY3_URL + id)
}

export const requestAttr = ({
  c1Id,
  c2Id,
  c3Id,
}: Record<any, number | string>) => {
  return request.get<any, AttrResponseData>(
    API.ATTRLIST_URL + `${c1Id}/${c2Id}/${c3Id}`,
  )
}
export const requestDeleteAttr = (id: number) => {
  return request.delete<any, any>(API.DELETEATTR_URL + id)
}

export const requestAddOrUpdateAttr = (data: Attr) =>
  request.post<any, any>(API.ADDORUPDATEATTR_URL, data)
