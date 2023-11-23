// // new is deep or shadow copy
// function newUser(name) {

//     this.name = name
//     this.age = 'no defind'
//     this.friend = {
//         tom: {
//             email: 'google.com'
//         }
//     }
//     return this
// }

// let user1 = newUser('jack')
// let user2 = newUser('jerry')
// console.log(user1.friend.tom.email = "facebook.com");
// console.log(user2.friend.tom.email);




// function A() {return Object}
// function B() {return Object}

// let a = new A;
// let b = new B;

// console.log( a == b ); // true


// const user1 = {
//     name: 'jack',
//     age: 'tom'
// }

// let userShow = 'name'
// console.log(user1.userShow);
// console.log(user1[userShow]);
// //  [] 允许我们以动态的方式访问对象的属性，而使用 . 则更适合静态的属性访问。


// let id1 = Symbol.for("regination user id");
// // Symbol.for 方法创建的全局 symbol
// let user1 = {
//     [id1] : 'default id'
// }
// console.log(user1);

// console.log(Symbol.keyFor(id1));



let obj = {
    toString() {
        return +"2";
    }
};

console.log(obj.toString()); // 22（"2" + 2）被转换为原始值字符串 => 级联

console.log(Number('100556'))


let i = 0;
while (i.toFixed(0) != 10) {
    i += 0.2;
    console.log("i is",i.toFixed(0));
}