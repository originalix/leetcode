# 题目 （11. 盛最多水的容器） 

难度：中等

链接：[https://leetcode-cn.com/problems/container-with-most-water/](https://leetcode-cn.com/problems/container-with-most-water/)

## 题目描述

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。

示例1：
![demo1](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

## 考察知识

双指针

## 思路

初见此题，直觉想着使用两层循环的暴力解法算出最大面积，但是 O(N^2) 的时间复杂度让算法因为超时导致提交失败。

暴力解法如下：

```ts
function maxArea(height: number[]): number {
  let maxArea = Number.MIN_VALUE
  for (let i = 0; i < height.length; i++) {
    for (let k = i; k < height.length; k++) {
      maxArea = Math.max(maxArea, Math.min(height[i], height[k]) * (k - i))
    }
  }
  return maxArea
}
```

在暴力解法失败后开始思考别的解法，本题的最优做法是使用双指针。初始时左右两个指针分别指向数组的左右两端。这样能使容器的宽度达到最大，之后开始移动高度较小的指针，此时容器的盛水容量是 `指针指向高度的较小者 * 两个指针的距离` 。如果去移动高度较高的指针，会造成容器高度不变，但是距离减小的现象，这样计算容器面积会减小，所以需要移动高度较小的指针。

此种解法时间复杂度：O(n)，只需要遍历数字一次，代码如下：

```ts
function maxArea(height: number[]): number {
  let maxArea = Number.MIN_VALUE
  let left = 0, right = height.length - 1
  
  while (left < right) {
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left)) 
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxArea
}
```
