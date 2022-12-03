import React, { FC, ReactNode } from 'react'
import TextField from '@mui/material/TextField'
import { Box, InputAdornment, Typography } from '@mui/material'

export type InputTextProp = {
  /** ID */
  readonly id: string
  /** 値 */
  readonly value: string
  /** テキストエリアのタイプ属性 */
  readonly type: React.InputHTMLAttributes<unknown>['type']
  /** 枠線を入れるか */
  readonly outlined?: boolean
  /** サイズ */
  readonly size?: 'small' | 'medium'
  /** エラー表示 */
  readonly error?: boolean
  /** エラーメッセージ */
  readonly errorMessage?: string
  /** 無効可否 */
  readonly disabled?: boolean
  /** 読み取り専用フラグ */
  readonly readonly?: boolean
  /** 複数行 */
  readonly multiline?: boolean
  /** 行数 */
  readonly rows?: number
  /** 最大文字数 */
  readonly maxLength?: number
  /** UI上の最大文字数 */
  readonly counter?: number
  /** プレースホルダー */
  readonly placeholder?: string
  /** 前エレメント */
  readonly prependNode?: ReactNode
  /** 後アイコン */
  readonly appendNode?: ReactNode
  /** blur時に自動トリミングするのを抑制する */
  readonly isSuppressAutoTrim?: boolean
  /** エラーメッセージ等の領域を消す */
  readonly hideDetails?: boolean
  /** テキスト入力時 */
  readonly onInputValue: (value: string) => void
}

export const InputText: FC<InputTextProp> = (props) => {
  const propOutlined = props.outlined || true

  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onInputValue(event.target.value)
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <TextField
        id={props.id}
        value={props.value}
        variant={propOutlined ? 'outlined' : 'standard'}
        size={props.size || 'small'}
        error={props.error}
        helperText={props.errorMessage}
        disabled={props.disabled}
        InputProps={{
          readOnly: props.readonly,
          startAdornment: props.prependNode && (
            <InputAdornment position="start">
              {props.prependNode}
            </InputAdornment>
          ),
          endAdornment: props.appendNode && (
            <InputAdornment position="start">{props.appendNode}</InputAdornment>
          ),
        }}
        placeholder={props.placeholder}
        multiline={props.multiline}
        rows={props.rows}
        type={props.type || 'text'}
        fullWidth
        onChange={inputText}
      />
      {props.maxLength && (
        <Typography
          variant="body1"
          sx={{
            position: 'absolute',
            right: 0,
          }}
          color="GrayText"
        >{`${props.value.length}/${props.maxLength}`}</Typography>
      )}
    </Box>
  )
}
