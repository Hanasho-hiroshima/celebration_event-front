import { addMethod } from 'yup/lib/index'
import setLocale from 'yup/lib/setLocale'
import BaseSchema from 'yup/lib/schema'
import StringSchema, { create as stringCreate } from 'yup/lib/string'
import { AnyObject, Maybe, Message } from 'yup/lib/types'
import { string as stringLocale } from './locale'

export const isKatakana = (kana: string): boolean => {
  return /^([ァ-ン]|ヴ|ー| |　)*$/.test(kana || '')
}
export const isHiragana = (text: string): boolean => {
  return /^([ぁ-ん]|ゔ|ー| |　)*$/.test(text || '')
}

addMethod<StringSchema>(stringCreate, 'katakana', function () {
  return this.test('katakana', function (value, testContext) {
    if (isKatakana(value || '')) {
      return true
    }

    return testContext.createError({
      message: stringLocale.katakana,
    })
  })
})

addMethod<StringSchema>(
  stringCreate,
  'furigana',
  function (message: Message = stringLocale.furigana) {
    return this.test({
      message,
      name: 'furigana',
      test(value) {
        if (value == null) {
          return true
        }
        if (isKatakana(value) || isHiragana(value)) {
          return true
        }
        return false
      },
    })
  }
)

declare module 'yup' {
  // eslint-disable-next-line
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    katakana(): StringSchema<TType, TContext>
    furigana(message?: Message): StringSchema<TType, TContext>
  }
}

setLocale({
  string: stringLocale,
})

export default StringSchema

export { stringCreate }
