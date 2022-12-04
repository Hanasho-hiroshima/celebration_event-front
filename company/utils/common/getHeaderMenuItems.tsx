import {
  HeaderMenuItem,
  HeaderMenuItemHasChildren,
  HeaderMenuItemSingle,
} from '~/types/common/headerMenu'
import {
  WindowOutlined,
  Groups3Outlined,
  SettingsOutlined,
  CopyrightOutlined,
  PrivacyTipOutlined,
  RuleOutlined,
} from '@mui/icons-material'

const createHeaderMenuItemSingle = (item: HeaderMenuItemSingle) => item
const createHeaderMenuItemChildren = (item: HeaderMenuItemHasChildren) => item

export const getHeaderMenuItems = () => {
  const items: HeaderMenuItem[] = []

  items.push(
    createHeaderMenuItemSingle({
      id: 1,
      title: 'おまとめ',
      icon: <WindowOutlined />, // tsファイルだとエラーになってしまう
      to: '/samples',
    })
  )

  items.push(
    createHeaderMenuItemSingle({
      id: 2,
      title: '協賛者一覧',
      icon: <Groups3Outlined />,
      to: '/sponsors',
    })
  )

  items.push(
    createHeaderMenuItemChildren({
      id: 3,
      title: '設定',
      icon: <SettingsOutlined />,
      isOpenSubs: false,
      subs: [
        createHeaderMenuItemSingle({
          id: 4,
          title: '特定商取引法に基づく表記',
          icon: <CopyrightOutlined />,
          to: '/terms/1/edit',
        }),
        createHeaderMenuItemSingle({
          id: 5,
          title: 'プライバシーポリシー',
          icon: <PrivacyTipOutlined />,
          to: '/terms/2/edit',
        }),
        createHeaderMenuItemSingle({
          id: 6,
          title: '利用規約',
          icon: <RuleOutlined />,
          to: '/terms/3/edit',
        }),
      ],
    })
  )
  return items
}
