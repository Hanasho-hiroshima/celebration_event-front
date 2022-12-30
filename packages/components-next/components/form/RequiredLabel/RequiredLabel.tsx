import { FC } from 'react'
import styles from './RequiredLabel.module.scss'

export type RequiredLabelProps = {
  /** 必須可否 */
  readonly required?: boolean
}

export const RequiredLabel: FC<RequiredLabelProps> = (props) => {
  return (
    <div
      className={`${styles.required_label} ${
        props.required && styles._required
      }`}
    >
      {props.required ? '必須' : '任意'}
    </div>
  )
}
