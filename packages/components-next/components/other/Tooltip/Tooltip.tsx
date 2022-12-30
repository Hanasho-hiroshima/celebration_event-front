import { FC } from 'react'
import MUITooltip from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { TooltipProps as MUITooltipProps } from '@mui/material/'

export type TooltipProps = {
  /** テキスト */
  readonly text: string
  /** ツールチップを出す位置 */
  readonly placement?: MUITooltipProps['placement']
}

export const Tooltip: FC<TooltipProps> = (props) => {
  return (
    <MUITooltip
      title={props.text}
      placement={props.placement ? props.placement : 'right'}
    >
      <InfoOutlinedIcon />
    </MUITooltip>
  )
}
