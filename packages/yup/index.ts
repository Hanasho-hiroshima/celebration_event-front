// exportの形式をライブラリに合わせる
// https://github.com/jquense/yup/blob/v0.32.11/src/index.ts
import BooleanSchema, { create as booleanCreate } from 'yup/lib/boolean'
import ObjectSchema, { create as objectCreate } from 'yup/lib/object'
import { create as refCreate } from 'yup/lib/Reference'
import ValidationError from 'yup/lib/ValidationError'
import reach from 'yup/lib/util/reach'
import BaseSchema, { AnySchema } from 'yup/lib/schema'
import type { TypeOf, Asserts } from 'yup/lib/util/types'
import type { SchemaOf } from 'yup/lib/index'
// ここから拡張
import MixedSchema, { mixedCreate } from './lib/mixed/mixed'
import StringSchema, { stringCreate } from './lib/string/string'

export type { SchemaOf, TypeOf, Asserts, Asserts as InferType, AnySchema }

export {
  mixedCreate as mixed,
  booleanCreate as boolean,
  stringCreate as string,
  objectCreate as object,
  refCreate as ref,
  reach,
  ValidationError,
}

export { MixedSchema, BaseSchema, BooleanSchema, StringSchema, ObjectSchema }
