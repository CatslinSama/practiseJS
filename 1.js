// 将 border-left-width 转换成 borderLeftWidth
// 重要程度: 5
// 编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。

// 即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。

// 示例：

camelize("background-color") 
// == 'backgroundColor';
camelize("list-style-image") 
// == 'listStyleImage';
camelize("-webkit-transition") 
// == 'WebkitTransition';

function camelize(str)  {
    console.log(str.split('-').map((value,index) => index==0 ? value : value[0].toUpperCase() + value.slice(1)).join(''))
}