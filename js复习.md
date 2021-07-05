## 1. 变量相关问题

- 变量到底是什么?


- 基本类型变量与引用类型变量的区别是什么?


- 给变量赋值到底做了什么?


- 函数传参, 到底是值传递还是引用传递? 


- 有哪些改变变量值的方式?


- 如何理解下面2句重要的话(编码演示说明)?




## 2. 函数与对象相关重要问题

1. 如何理解/证明函数也对象?


2. 区别实例对象与函数对象?


3. 区别方法与属性?


4. 区别方法与函数?


5. 判断是回调函数的3个条件?


6. 回调函数需要确定的3个问题?

   



## 3. 表达式a.b的内部解析流程



## 4. 原型链内存分析

```js
function Fn () {}
const fn1 = new Fn()
const fn2 = new Fn()

const o1 = new Object()
const o2 = {}

console.log(Fn instanceOf Object)
console.log(Fn instanceof Function)
console.log(Object instanceof Function)
console.log(Object instanceof Object)
console.log(Function instanceof Object)
console.log(Function instanceof Function)
console.log(fn1 instanceof Function)
console.log(Object instanceof Fn)
```



## 5. ES6常用新语法



## 6. Promise的基本使用



## 7. axios的基本使用

- 测试接口: 

  - [https://api.github.com/search/users?q=a](https://api.github.com/search/users?q=${value})a

  - http://39.98.123.211:8170/admin/acl/index/login