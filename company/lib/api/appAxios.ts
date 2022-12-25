import axios from 'axios'
import Axios from 'axios'
import { toast } from 'react-toastify'

export const appAxios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

export const onRequestError = (fn: (error: any) => any) => {
  appAxios.interceptors.request.use(
    undefined,
    (error) => fn(error) || Promise.reject(error)
  )
}

export const onResponseError = (fn: (error: any) => any) => {
  appAxios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (
        error.request.responseType === 'blob' &&
        error.response.data instanceof Blob &&
        error.response.data.type &&
        error.response.data.type.toLowerCasa().includes('json')
      ) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => {
            if (typeof reader.result === 'string') {
              error.response.data = JSON.parse(reader.result)
              resolve(Promise.reject(error))
            }
          }

          reader.onerror = () => {
            reject(error)
          }

          reader.readAsText(error.response.data)
        })
      }
      return Promise.reject(error)
    }
  )

  appAxios.interceptors.response.use(
    undefined,
    (error) => fn(error) || Promise.reject(error)
  )
}

export const onError = (fn: (error: any) => any) => {
  onRequestError(fn)
  onResponseError(fn)
}

onError((err) => {
  if (!axios.isAxiosError(err)) {
    console.error('not axios error')
    return
  }

  if (!err.response) {
    toast.error('エラーが発生しました')
    return
  }

  if (err.response.data.message && err.response.data.message != '') {
    toast.error(err.response.data.message)
  } else {
    toast.error('エラーが発生しました')
  }
})
