import { AxiosResponse } from 'axios'
import { cloneDeep } from 'lodash-es'

export type ParserOptions = {
  /** ログを表示しない */
  isHideLog?: boolean
}

export function parseRequest<U, T = U>(
  request: Promise<AxiosResponse<U>>,
  parser: (data: U) => T = (data) => data as unknown as T,
  options: ParserOptions = {}
): Promise<T> {
  return new Promise((resolve, reject) => {
    request
      .then((response) => {
        const parsedData = parser(response.data)
        resolve(parsedData)

        // デバッグログ
        if (!options.isHideLog && process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.group(
            `${response.config.method} response from ${response.config.url}`
          )
          // eslint-disable-next-line no-console
          console.log(
            '%c raw data',
            'color: #9e9e9e; font-weight: bold',
            cloneDeep(response.data)
          )
          // eslint-disable-next-line no-console
          console.log(
            '%c parsed data',
            'color: #a260bf; font-weight: bold',
            cloneDeep(parsedData)
          )
          // eslint-disable-next-line no-console
          console.groupEnd()
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
