import { StringLocale } from 'yup/lib/locale'
import { Message } from 'yup/lib/types'

export const string: StringLocale & {
  katakana: StringLocale['email']
  furigana: Message
} = {
  length: ({ label, length }) =>
    (label ? label + 'は' : '') + `${length}文字で入力してください`,
  min: ({ label, min }) =>
    (label ? label + 'は' : '') + `${min}文字以上入力してください`,
  max: ({ label, max }) =>
    (label ? label + 'は' : '') + `${max}文字以下にしてください`,
  matches: ({ label, regex }) =>
    (label ? label + 'は' : '') + `以下の形式で入力してください: ${regex}`,
  email: ({ label }) =>
    (label ? label + 'は' : '') + `正しいメールアドレスを入力してください`,
  url: ({ label }) =>
    (label ? label + 'は' : '') + `正しいURLを入力してください`,
  uuid: ({ label }) =>
    (label ? label + 'は' : '') + `正しいUUIDを入力してください`,
  trim: ({ label }) =>
    (label ? label + 'は' : '') + `前後の空白を取り除いてください`,
  lowercase: ({ label }) =>
    (label ? label + 'は' : '') + `小文字のみ入力してください`,
  uppercase: ({ label }) =>
    (label ? label + 'は' : '') + `大文字のみ入力してください`,
  katakana: ({ label }) =>
    (label ? label + 'は' : '') + '全角カタカナのみ入力してください',
  furigana: ({ label }) =>
    (label ? label + 'は' : '') +
    '全角カタカナまたはひらがなで入力してください',
}
