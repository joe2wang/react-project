import httpRequest from '../request'
import { LIST_API } from '../api'
export function getList (data) {
  return new Promise((resolve, reject) => {
    return httpRequest({ url: LIST_API, ...data })
      .then(({ data }) => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
