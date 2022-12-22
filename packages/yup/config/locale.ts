import { LocaleObject, ObjectLocale } from 'yup/lib/locale'
import { MessageParams } from 'yup/lib/types'

export const object: ObjectLocale = {
  noUnknown: ({
    label,
    unknown,
  }: { unknown?: string } & Partial<MessageParams>) => {
    ;(label ? label + 'には' : '') +
      '登録されていないキーは入力できません' +
      (unknown ? ': ' + unknown : '')
  },
}

export const locale: LocaleObject = {
  object,
}
