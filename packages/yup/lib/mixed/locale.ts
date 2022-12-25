import { MixedLocale } from 'yup/lib/locale'

export const mixed: MixedLocale = {
  required: ({ label }) => (label ? label + '必須です' : '入力必須です'),
}
