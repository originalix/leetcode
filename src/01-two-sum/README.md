# 题目 （1.两数之和）

难度：简单

链接：[https://leetcode-cn.com/problems/two-sum/](https://leetcode-cn.com/problems/two-sum/)

## 题目描述

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

## 考察知识

哈希表

## 思路

在看到该题目时，直觉是使用暴力解法两层循环，在内层循环中判断两数相加是否等于 target，若是相等则得到解。类似如此：

```ts
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (k === i) continue;
      if (nums[i] + nums[k] === target) {
        return [i, k]
      }
    }
  }
};
```

使用暴力解法时间复杂度为 O(n^2)，耗时较长，在此处可以考虑使用哈希表来优化。我们可以使用一个 Map 数据结构来存储当前遍历的值与索引，在每次循环时判断 map 中是否有 `target - current` 这样两数之差的键，如果存在则说明这个值在之前出现过，我们就找到了结果。

代码如下：

```ts
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]   
    }
    map.set(nums[i], i)
  }
};
```
