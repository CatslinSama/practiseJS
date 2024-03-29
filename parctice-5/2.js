// 你有一个 user 对象数组，每个对象都有 name，surname 和 id。
// 编写代码以该数组为基础，创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成。
// 例如：
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, mary, pete];
let usersMapped = users.map(i => ({
    fullName: `${i.name} ${i.surname}`,
    id: i.id
}))
console.log(usersMapped.sort((a, b) => a.id - b.id));
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
// 所以，实际上你需要将一个对象数组映射到另一个对象数组。在这儿尝试使用箭头函数 => 来编写