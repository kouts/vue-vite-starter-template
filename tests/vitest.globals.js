import { beforeAll } from 'vitest'

beforeAll(() => {
  // Set timezone to UTC globally for all tests
  vi.stubEnv('TZ', 'UTC')

  globalThis.ResizeObserver = class ResizeObserver {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      //
    }

    disconnect() {
      return null
    }

    observe() {
      return null
    }

    unobserve() {
      return null
    }
  }
})

afterAll(() => {
  vi.unstubAllEnvs()

  delete globalThis.ResizeObserver
})
