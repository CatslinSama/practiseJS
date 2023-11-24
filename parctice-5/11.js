// 创建一个构造函数 Calculator，以创建“可扩展”的 calculator 对象。
// 该任务由两部分组成。
// 首先，实现 calculate(str) 方法，该方法接受像 "1 + 2" 这样格式为“数字 运算符 数字”（以空格分隔）的字符串，并返回结果。该方法需要能够理解加号 + 和减号 -。
// 用法示例：
let calc = new Calculator;
console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("5 - 9")); // 10
calc.addMethod("/", (a, b) => a / b);
console.log(calc.calculate("4 / 2")); // 2


function Calculator() {
    this.method = {
        "-": (a, b) => (a - b),
        "+": (a, b) => (a + b)
    }
    this.calculate = function (str) {
        let [a, b, c] = str.trim().split(' ')
        return this.method[b](+a,+c)
    }
    this.addMethod = function(name,func) {
        this.method[name] = func
    }
}