import maxArea from './index'
describe('Container With Most Water', () => {
  test('max area should be 49', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })

  test('max area should be 1', () => {
    expect(maxArea([1, 1])).toBe(1)
  })

  test('max area should be 16', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16)
  })

  test('max area should be 2', () => {
    expect(maxArea([1, 2, 1])).toBe(2)
  })
})
