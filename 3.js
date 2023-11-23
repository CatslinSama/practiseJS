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




function A() {return Object}
function B() {return Object}

let a = new A;
let b = new B;

console.log( a == b ); // true