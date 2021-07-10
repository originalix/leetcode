# 题目 （1833.雪糕的最大数量）

难度：中等

链接：[https://leetcode-cn.com/problems/maximum-ice-cream-bars/](https://leetcode-cn.com/problems/maximum-ice-cream-bars/)

## 题目描述

夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。

商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。

给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。

注意：Tony 可以按任意顺序购买雪糕。

示例 1：

```
输入：costs = [1,3,2,4,1], coins = 7
输出：4
解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
```

示例 2：

```
输入：costs = [10,6,8,7,7,8], coins = 5
输出：0
解释：Tony 没有足够的钱买任何一支雪糕。
```

示例 3：

```
输入：costs = [1,6,3,1,2,5], coins = 20
输出：6
解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。
```

提示：

- costs.length == n
- 1 <= n <= 10^5
- 1 <= costs[i] <= 10^5
- 1 <= coins <= 10^8

## 考察知识

排序、贪心

## 思路

### 方法一：

看到此题后，能首先想到是思路就是先对雪糕价格进行排序，之后可以得到贪心的解法：按由小到大的顺序遍历数组，记录能买到雪糕的数量，直至雪糕的总额超过现金数目。

此思路代码如下：

```ts
function maxIceCream(costs: number[], coins: number): number {
  const sortCosts = costs.sort((a, b) => a - b)
  let count = 0
  let sum = 0
  for (let i = 0; i < sortCosts.length; i++) {
    sum += sortCosts[i]
    if (sum <= coins) {
      count++
    } else {
      break
    }
  }
  return count
}
```

此种解法下的时间复杂度，js 的排序算法时间复杂度为 O(nlogn)，而遍历数组的时间复杂度为 O(n)，所以整体时间复杂度为 O(nlogn)。

### 方法二：

由于 costs 数组中的元素不会超过 10^5，所以可以采用计数排序，将时间复杂度降低到线性。

使用 freq 记录 costs 数组中每个元素出现的次数，其中 freq[i] 表示元素 i 在数组 costs 中出现的次数。仍然使用贪心的思想，买最便宜的雪糕，按从小到大的索引顺序遍历 freq 数组，如果该下标不超过剩余硬币数，则计算出该下标能够购买的最大雪糕数量。然后用余额减去能够购买数量雪糕的总金额。

代码如下：

```ts
function maxIceCream(costs: number[], coins: number): number {
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
```
