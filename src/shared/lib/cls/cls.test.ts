import {cls} from './cls'

describe('cls', () => {
  test('return first param only', () => {
    expect(cls('className', {}, [])).toBe('className')
  })
  test('return first param and additional', () => {
    expect(cls('className', {}, ['class1'])).toBe('className class1')
  })
  test('return first param and mods', () => {
    expect(cls('className', {hover: true}, [])).toBe('className hover')
  })
  test('return all', () => {
    expect(cls('className', {hover: true}, ['clear'])).toBe('className hover clear')
  })
})
