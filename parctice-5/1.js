// 你有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。
// 例如：
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(i => i.name)
console.log( names ); // John, Pete, Mary
