// // 创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
// let styles = ["Jazz", "Blues"];
// // 将 “Rock-n-Roll” 从数组末端添加进去。
// styles.push("Rock-n-Roll")
// console.log(styles);
// // 用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
// styles[Math.floor((styles.length-1)/2)] = "Classics"
// console.log(styles);
// // 去掉数组的第一个值并显示它。
// styles.shift()
// console.log(styles);
// // 在数组前面添加 Rap 和 Reggae。
// styles.unshift("Rap","Reggae")
// console.log(styles);



// let arr = ["a", "b"];

// arr.push(function() {
//   console.log("return is", this );
// });
// console.log(arr[1]);
// arr[2](); // ?


let array = [1,'2',3,4]

for(let i in array) {
    console.log(typeof i);
}
for(let i of array) {
    console.log(typeof i);
}

