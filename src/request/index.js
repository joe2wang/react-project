import axios from 'axios'
export default function httpRequest (params) {
  const { method = 'get', url, ...rest } = params
  axios.interceptors.request.headers = {
    'content-type': 'application/json'
  }
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data: rest
    }).then(({ data,...ers }) => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
