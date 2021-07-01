import twoSum from './two-sum'
describe('two sum', () => {
  test('it should be [0, 1]', () => {
    const res = twoSum([2, 7, 11, 15], 9)
    expect(res).toStrictEqual([0, 1])
  })
})
