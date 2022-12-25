/** ユーザー情報 */
export type StaffDetail = {
  id: number
  name: string
  email: string
  createdAt: string
  updatedAt: string
  companyId: number
}

/** ログイン成功時の返り血 */
export type LoggedInStaff = {
  message: string
}

/** ログイン時のやつ */
export type LoginFormInput = {
  email: string
  password: string
}
