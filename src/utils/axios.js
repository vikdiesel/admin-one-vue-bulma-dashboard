import axios from 'axios'
import { getToken } from './cookies'

// create singleton for axios
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  mode: 'cors',
  credentials: 'same-origin'
  // timeout: 30000
})

service.interceptors.request.use(async config => {
  if (!config.public) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

// response interceptor
service.interceptors.response.use(
  res => {
    return res.data
  },
  async error => {
    console.log(error)
    // Snackbar.open('Look at me!')
    // Notification.open('Notify!')
    // Toast.open('Toasty!')

    /* if (!error.response) {
      Dialog.confirm({
        title: 'Algo salio mal :(',
        message:
          'El servicio <b>no esta disponible</b> en estos momentos. Revise su conexion a internet o intente más tarde',
        confirmText: 'Ir al inicio',
        type: 'is-warning',
        hasIcon: true,
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: () => router.push('/')
      })
    } */
    return Promise.reject(error.response.data)
  }
)

export default service
