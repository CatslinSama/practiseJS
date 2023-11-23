// function makeUser() {
//     name: 'marry'
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();
// let name  = 'jack'
// console.log(user.ref.name); // Error: Cannot read property 'name' of undefined


let count = {
    num : 0,
    add() {
        this.num++
        return this
    },
    reduce() {
        this.num--
        return this
    },
    square() {
        this.num *= this.num
        return this
    },
    result() {
        return this.num
    }
}
console.log(count.add().add().square().reduce().result())