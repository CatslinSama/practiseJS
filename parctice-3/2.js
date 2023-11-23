// console.log( null >= 0 );  // (1) false
// console.log( null >= 0 ); // (3) true

// let i = 0; // 我们已经声明了 i 并对它进行了赋值

// for (; i < 3;) { // 不再需要 "begin" 语句段
//   console.log( i ); // 0, 1, 2
//   i++
// }


// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // 对每个自然数 i
//     console.log("i is",i);
//   for (let j = 2; j < i; j++) { // 寻找一个除数……
//     console.log("j is",j);
//     if (i % j == 0) continue nextPrime; // 不是素数，则继续检查下一个
//   }

//   console.log( i ); // 输出素数
// }



const ask = (question, yes, no) => {
  confirm(question) ? yes() :
    no();
}

ask(
  "Do you agree?",
  () => { console.log("You agreed."); },
  () => { console.log("You canceled the execution."); }
);