import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CircularProgress from '@mui/material/CircularProgress'
import Chip from '@mui/material/Chip'

export type InputAutocompleteProp<T extends Record<string, any>> = {
  /** 入力された値 */
  readonly value: T[] | T
  /** 複数選択可能か */
  readonly multiple?: boolean
  /** 選択肢リスト */
  readonly items: T[]
  /** 選択肢のvalueになるkey名 */
  readonly itemValueKey: keyof T
  /** 選択肢のlabelになるkey名 */
  readonly itemLabelKey: keyof T
  /** サイズ */
  readonly size?: 'small' | 'medium'
  /** ローディング */
  readonly loading?: boolean
  /** プレースホルダー */
  readonly placeholder?: string
  /** 読み取り専用 */
  readonly readonly?: boolean
  /** 非活性化 */
  readonly disabled?: boolean
  /** 固定されている値 */
  readonly fixedSelectedItem?: T[]
  /** 外枠 */
  readonly outlined?: boolean
  /** ハイライト */
  readonly autoHighlight?: boolean
  /** 更新関数 */
  readonly onSetItem: (value: any) => void
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export const InputAutocomplete = <Item extends Record<string, any>>(
  props: InputAutocompleteProp<Item>
): JSX.Element => {
  const propOutlined = props.outlined || true

  return (
    <Autocomplete
      value={props.value}
      multiple={props.multiple}
      options={props.items}
      readOnly={props.readonly}
      disabled={props.disabled}
      loading={props.loading}
      size={props.size === 'medium' ? 'medium' : 'small'}
      onChange={(event, newValue): void => {
        props.onSetItem(newValue)
      }}
      disableCloseOnSelect={props.multiple}
      getOptionLabel={(option): string => option[props.itemLabelKey]}
      getOptionDisabled={(option): boolean => option.disabled}
      renderTags={
        props.fixedSelectedItem != null
          ? (tagValue, getTagProps): React.ReactNode =>
              tagValue.map((option, index) => (
                <Chip
                  label={option[props.itemLabelKey]}
                  {...getTagProps({ index })}
                  disabled={props.fixedSelectedItem?.indexOf(option) !== -1}
                />
              ))
          : undefined
      }
      renderOption={
        props.multiple
          ? (renderProps, option, { selected }): React.ReactNode => (
              <li {...renderProps}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option[props.itemLabelKey]}
              </li>
            )
          : undefined
      }
      renderInput={(params): React.ReactNode => (
        <TextField
          {...params}
          placeholder={props.placeholder}
          variant={propOutlined ? 'outlined' : 'standard'}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}
