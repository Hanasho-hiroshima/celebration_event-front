import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  // 一旦カバレッジは無視
  // coveragePathIgnorePatterns: ['<rootDir>/config'],
  // coverageThreshold: {
  //   global: {
  //     brancheds: 80,
  //     functions: 80,
  //     lines: 80,
  //     statement: -10
  //   }
  // }
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}

export default config
