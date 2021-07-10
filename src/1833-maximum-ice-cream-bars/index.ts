export default function maxIceCream(costs: number[], coins: number): number {
  const freq = new Array(1000001).fill(0)

  for (const cost of costs) {
    freq[cost]++
  }

  let count = 0
  for (let i = 0; i < 100001; i++) {
    if (coins >= 1) {
      const currentCount = Math.min(freq[i], Math.floor(coins / i))
      count += currentCount
      coins -= i * currentCount
    } else {
      break
    }
  }

  return count
}
