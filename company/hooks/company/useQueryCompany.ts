import { appAxios } from '~/lib/api/appAxios'
import { parseRequest } from '~/lib/api/parser'
import { CompanyDetail } from '~/types/company/api'

export const useQueryCompany = () => {
  /**
   * 企業情報取得
   * @param companyId - 企業ID
   * @returns
   */
  const fetchCompany = (companyId: number) => {
    return parseRequest(appAxios.get<CompanyDetail>(`/company/${companyId}`))
  }

  return { fetchCompany }
}
