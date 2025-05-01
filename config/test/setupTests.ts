import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'

class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

global.ResizeObserver = ResizeObserver
