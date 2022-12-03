/** 方向の定数 */
export const DIRECTION_TYPE = {
  Vertical: 1,
  Horizontal: 2,
} as const
export type DirectionType = typeof DIRECTION_TYPE[keyof typeof DIRECTION_TYPE]
