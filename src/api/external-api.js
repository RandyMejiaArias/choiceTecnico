import axios from 'axios'

const externalApi = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret'
})

externalApi.interceptors.request.use((config) => {
  config.headers = {
    authorization: 'Bearer aSuperSecretKey'
  }

  return config
})

export default externalApi
