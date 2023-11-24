// arr 是一个数组。
// 创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。
// 例如：

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(strings) ); // Hare, Krishna, :-O


function unique(arr) {
    let result = []
    for(let valkue of arr) {
        if(!result.includes(valkue)) {
            result.push(valkue)
        }
    }
    return result
}