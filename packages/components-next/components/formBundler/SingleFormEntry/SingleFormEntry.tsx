import { FC } from 'react'
import { SingleItem } from '~/pkg/types/inputForm'
import { InputTitle } from '../../form/InputTitle/InputTitle'

export type SingleFormEntryProps<T> = {
  /** フォームデータ */
  readonly data: T
  /** 必須情報の表示方法 */
  readonly requiredDisplayType: 'label' | 'aster'
  /** フォーム項目 */
  readonly item: SingleItem<T>
}

type T = any

export const SingleFormEntry: FC<SingleFormEntryProps<T>> = (props) => {
  return (
    <div>
      <InputTitle
        title={props.item.label}
        required={props.item.required}
        requiredDisplayType={props.requiredDisplayType}
        tooltipText={props.item.tooltipText}
      />
    </div>
  )
}
