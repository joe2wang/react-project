import httpRequest from '../request'
import { LIST_API } from '../api'
export function getList (data) {
  return httpRequest({ url: LIST_API, ...data })
  
 
}
