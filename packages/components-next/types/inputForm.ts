/** 単一の入力項目情報 */
export type SingleItem<T> = {
  /** 項目分類 */
  classification?: 'jobSeekerSite' | 'management'
  /** 項目種別(単体) */
  type?: 'single'
  /** 入力されるキー名 */
  key: keyof T
  /** 入力ラベル名 */
  label: string
  /** ツールチップテキスト */
  tooltipText?: string
  /** インフォ情報 */
  infoList?: string[]
  /** 必須可否 */
  required?: boolean
  /** 非活性か */
  disabled?: boolean
  /** 読み取り専用フラグ */
  readonly?: boolean
  /** バリデーションルールズ */
  rules?: any[]
  /** 入力オプション() */
  option:
    | SingleTextOption
    | SingleBooleanOption
    | SingleRadioOption
    | SingleSelectOption
    | SingleAutocompleteOption
    | SingleCheckOption
    | SingleCheckObjectOption
}

/** テキストの入力オプション */
export type SingleTextOption = {
  ui: 'text'
  /** プレースホルダー */
  placeholder?: string
  /** 複数行か */
  multiline?: boolean
  /** 最大文字数 */
  maxLength?: number
}

/** true/falseの選択項目 */
export type BoolSelectItem = {
  value: boolean
  label: string
}

/** booleanの入力オプション */
export type SingleBooleanOption = {
  ui: 'bool-select'
  items: BoolSelectItem[]
}

/** ラジオボタンの入力オプション */
export type SingleRadioOption<T = any> = {
  ui: 'radio'
  items: T[]
  /** 選択時にvalueになるkey名 */
  itemValueKey: keyof T
  /** ラジオボタンのラベルに表示するkey名 */
  itemLabelKey: keyof T
}

/** 選択の入力オプション */
export type SingleSelectOption<T = any> = {
  ui: 'select'
  /** 選択肢リスト */
  items: T[]
  /** 選択時のvalueになるkey名 */
  itemValueKey: keyof T
  /** 選択時のlabelになるkey名 */
  itemLabelKey: keyof T
  /** 複数選択可能か */
  multiple?: boolean
  /** プレースホルダー */
  placeholder?: string
}

/** オートコンプリートの入力オプション */
export type SingleAutocompleteOption<T = any> = {
  ui: 'autocomplete'
  /** 選択肢リスト */
  items: T[]
  /** 選択時のvalueになるkey名 */
  itemValueKey: keyof T
  /** 選択時のlabelになるkey名 */
  itemLabelKey: keyof T
  /** 複数選択が可能か */
  multiple?: boolean
}

/** チェックの入力オプション */
export type SingleCheckOption<T = any> = {
  ui: 'check'
  /** 選択肢リスト */
  items: T[]
  /** 選択肢のvalueになるkey名 */
  itemValueKey: keyof T
  /** 選択肢のlabelになるkey名 */
  itemLabelKey: keyof T
  /** チェックボックスの並び方向 */
  direction?: 'horizontal' | 'vertical'
}

/** チェックオブジェクトの入力オプション */
export type SingleCheckObjectOption<T = any> = {
  ui: 'check'
  /** 選択肢リスト */
  items: T[]
  /** 選択肢のvalueになるkey名 */
  itemValueKey: keyof T
  /** 選択肢のlabelになるkey名 */
  itemLabelKey: keyof T
  /** チェックボックスの並び方向 */
  direction?: 'horizontal' | 'vertical'
}
