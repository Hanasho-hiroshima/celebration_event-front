import { appAxios } from '~/lib/api/appAxios'
import { parseRequest } from '~/lib/api/parser'
import { LoggedInStaff } from '~/types/staff/api'

export const useMutateStaff = () => {
  /**
   * ログイン
   * @param email
   * @param password
   * @param accountName
   */
  const login = (email: string, password: string, accountName: string) => {
    return parseRequest(
      appAxios.post<LoggedInStaff>(`/company/auth/${accountName}/login`, {
        email,
        password,
      })
    )
  }

  return { login }
}
