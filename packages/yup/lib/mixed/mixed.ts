import setLocale from 'yup/lib/setLocale'
import MixedSchema, { create as mixedCreate } from 'yup/lib/mixed'
import { mixed as mixedLocale } from './locale'

setLocale({
  mixed: mixedLocale,
})

export default MixedSchema

export { mixedCreate }
