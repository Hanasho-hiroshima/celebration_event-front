import { FC } from 'react'
import styles from './InputTitle.module.scss'
import { RequiredLabel } from '../RequiredLabel/RequiredLabel'
import { Tooltip } from '../../other/Tooltip/Tooltip'

export type InputTitleProps = {
  /** タイトル */
  readonly title: string
  /** 必須可否 */
  readonly required?: boolean
  /** ツールチップ */
  readonly tooltipText?: string
  /** 必須情報の表示方法 */
  readonly requiredDisplayType: 'label' | 'aster'
}

export const InputTitle: FC<InputTitleProps> = (props) => {
  const requiredDisplayType =
    props.requiredDisplayType == null ? 'label' : props.requiredDisplayType
  return (
    <div className={styles.input_title}>
      {props.required != null && requiredDisplayType === 'label' && (
        <RequiredLabel required={props.required} />
      )}
      <div>{props.title}</div>
      {requiredDisplayType === 'aster' && props.required && (
        <div className={styles.aster}>*</div>
      )}
      {props.tooltipText != null && <Tooltip text={props.tooltipText} />}
    </div>
  )
}
