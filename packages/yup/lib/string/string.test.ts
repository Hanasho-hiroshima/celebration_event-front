import { AnySchema } from 'yup/lib/schema'
import ValidationError from 'yup/lib/ValidationError'
import { stringCreate } from './string'

const VALUES = ['TEXT', ' ', '　', 'テキスト', 'ﾃｷｽﾄ', null, undefined]
const label = 'フィールド'

const doTests = (
  schema: AnySchema,
  values: Array<string | null | undefined>
): void => {
  values.forEach((value) => {
    test(`${value}`, async () => {
      const result = await schema
        .validate(value, { strict: true, abortEarly: false })
        .then(() => true)
        .catch((err: ValidationError) => err.errors)
      expect(result).toMatchSnapshot()
    })
  })
}

describe('validation', () => {
  describe('katakana', () => {
    const schema = stringCreate().katakana()
    describe('no label', () => {
      doTests(schema, VALUES)
    })

    describe('with label', () => {
      const schemaWithLabel = schema.clone().label(label)
      doTests(schemaWithLabel, VALUES)
    })
  })

  describe('furigana', () => {
    const values = ['なまえ', 'ナマエ', 'ﾅﾏｴ', ' ', '　', null, undefined]
    const schema = stringCreate().furigana()
    describe('no label', () => {
      doTests(schema, values)
    })

    describe('with label', () => {
      const schemaWithLabel = schema.label(label)
      doTests(schemaWithLabel, values)
    })
  })
})
