// const str = 'abcdefg'
// function getUp(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(getUp(str));


// function checkSpam(str) {
//     return str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xx")
// }
// console.log(
//     checkSpam('buy ViAgRA now'),
//     checkSpam('free xxxxx'),
//     checkSpam("innocent rabbit"),
// );

// function truncate(str,num) {
//     (str.length >= num) ? console.log(str.slice(0,num-1)+ '...') : console.log(str);
// }

// truncate("What I'd like to tell on this topic is:", 20) 
// // = "What I'd like to te…"

// truncate("Hi everyone!", 20) 
// // = "Hi everyone!"


function extractCurrencyValue(strs) {
    return strs.slice(1)
}
console.log( extractCurrencyValue('$120')); // true