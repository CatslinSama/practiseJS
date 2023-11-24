// 写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。
// 该函数应该只修改数组。它不应该返回任何东西。
// 例如：

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, start, end) {
    arr.map((value, index) => ((start > value || value > end) ? arr.splice(index, 1) : null))
}