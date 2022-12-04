import { ReactNode } from 'react'

export type HeaderMenuItemSingle = {
  /** 識別子 */
  id: number
  /** リンク先 */
  to: string
  /** タイトル */
  title: string
  /** アイコン */
  icon: ReactNode
}

export type HeaderMenuItemHasChildren = {
  /** 識別子 */
  id: number
  /** タイトル */
  title: string
  /** アイコン */
  icon: ReactNode
  /** サブメニュー */
  subs: HeaderMenuItemSingle[]
  /** サブメニュー開くか */
  isOpenSubs: boolean
}

export type HeaderMenuItem = HeaderMenuItemSingle | HeaderMenuItemHasChildren
