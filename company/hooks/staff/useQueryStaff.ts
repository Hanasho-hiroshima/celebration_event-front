import { appAxios } from '~/lib/api/appAxios'
import { parseRequest } from '~/lib/api/parser'
import { StaffDetail } from '~/types/staff/api'

export const useQueryStaff = () => {
  /**
   * ユーザー情報取得
   */
  const fetchUser = () => {
    return parseRequest(appAxios.get<StaffDetail>(`/staff`))
  }

  return { fetchUser }
}
