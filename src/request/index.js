import axios from 'axios'
export default function httpRequest (params) {
  const { method = 'get', url, ...rest } = params
  axios.interceptors.request.headers={
    'content-type':'application/json'
  }
  return axios({
    method,
    url,
    data: rest
  })
}
