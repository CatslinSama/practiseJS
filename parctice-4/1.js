// // // 创建一个空的对象 user。
// // let user = {}
// // // 为这个对象增加一个属性，键是 name，值是 John。
// // user.name = 'John'
// // console.log(user);
// // // 再增加一个属性，键是 surname，值是 Smith。
// // user.surname = 'Smith'
// // console.log(user);
// // // 把键为 name 的属性的值改成 Pete。
// // user.name = 'Pete'
// // console.log(user);
// // // 删除这个对象中键为 name 的属性。
// // delete user.name
// // console.log(user);


// // 写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。
// const user = {
//     name: 'jack',
//     age: 35
// }
// let hasName = (obj)  => {
//     console.log(obj);
//     for(key in obj) {
//         key=='name' ? console.log(`user name is ${user[key]}`) : console.log(`user age is ${user[key]}`);
//     }
// }

// hasName(user)



// 在调用之前
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// // 调用函数之后
// // menu = {
// //     width: 400,
// //     height: 600,
// //     title: "My menu"
// //   };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         typeof menu[key] == 'number' ? menu[key] *= 2 : null;
//         return menu
//     }
// }

// console.log(multiplyNumeric(menu));;




let user1 = {
    name: 'user1',
    email: {
        qq: '33652225565'
    }
}
let user2 = {}
function shallowCopy(user, newUser) {
    for (let key in user) {
        newUser[key] = user[key];
    }
}
const newUser2 = shallowCopy(user1, user2);
// console.log(newUser2);// { name: 'user1', email: { email1: 'email1' } }
// console.log(newUser2[1] === user1[1]);// true

function deepCopy(user) {
    let newUser = {}
    for (let key in user) {
        console.log("user[key] is ", user[key]);
        typeof user[key] === 'object' ?
            newUser[key] = deepCopy(user[key]) : newUser[key] = user[key];
    }
    return newUser
}
console.log(deepCopy(user1));
console.log(deepCopy(user1) === user1[1])