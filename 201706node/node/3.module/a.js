//1.创建一个js文件就是一个模块
//默认模块之间没有任何关系
// 模块有三种:核心，内置 / 文件模块 / 第三方模块
//2.使用某个文件模块时 必须使用相对路径来引用 ./ ../
//3.同步的 node是基于io操作，有回调函数的都是异步的
//4.使用的模块需要进行导出
//1） exports.属性 = 值  一个个导出
//2)  module.exports = 值 导出一次
//3)  挂载在global上 但是一般不使用这种方式
let c = require('./b.js');
console.log(b);


