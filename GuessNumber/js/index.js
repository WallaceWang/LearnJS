const goalNum = parseInt(Math.random() * 100);
let guessNumList = new Array();
// 提交按钮
const submitButton = document.querySelector('.guessSubmit');
submitButton.addEventListener('click', check);
// 历史记录
const guessList = document.querySelector('.guessList');

// 猜测结果
const guessResult = document.querySelector('.guessResult');
// 高或低
const lowOrHigh = document.querySelector('.lowOrHigh');


function check() {
    const input = document.querySelector('.guessField');
    const inputValue = parseInt(input.value);
    if (inputValue) {

        guessNumList.push(inputValue);

        guessList.textContent = "你上次猜的数：" + guessNumList.toString();        

        if (inputValue > goalNum) {
            guessResult.textContent = "你猜错了！";
            guessResult.style.backgroundColor = 'red';
            lowOrHigh.textContent = "请输入数字大了！";
        } else if (inputValue < goalNum) {
            guessResult.textContent = "你猜错了！";
            guessResult.style.backgroundColor = 'red';
            lowOrHigh.textContent = "请输入数字小了！";
        } else {
            guessResult.textContent = "恭喜你猜对了！";
            guessResult.style.backgroundColor = 'green';
            lowOrHigh.textContent = "";
        }
    } else {
        const errorP = document.createElement('p');
        errorP.textContent = "请输入数字！"
        errorP.textContent.fontcolor = 'red';
        document.body.appendChild(errorP);
    }
}

const clickBtn = document.querySelector('.clickme');
// clickBtn.onclick = function(){
//     let name = prompt('请输入你的名字：');
//     alert('Hi,' + name + ', nice to meet you!');
// };

clickBtn.addEventListener('click', function(){
    let name = prompt('请输入你的名字：');
    alert('Hi,' + name + ', nice to meet you!');
});

/*
// 构造函数
let Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayHello = sayHello;
}

function sayHello() {
    console.log('hello, ' + this.name);
}

let p1 = new Person('wallace', 30, '程序员');
let p2 = new Person('dou', 27, '护士');

p1.sayHello();
p2.sayHello();
*/

// 原型模式
// function Person(){}
// let Person = function() {}

// Person.prototype.name = 'wallace';
// Person.prototype.age = 30;
// Person.prototype.sayHello = function(){
//     console.log('hello, ' + this.name);
// }

// let p1 = new Person();
// let p2 = new Person();

// p1.sayHello();
// p2.sayHello();
// console.log(p1.sayHello === p2.sayHello);
// console.log(Person);
// console.log(Person['prototype']);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);
// console.log(Person.prototype['constructor']);
// console.log(Person.prototype.constructor == Person);
// console.log(p1.prototype);
// console.log(p1.__proto__);
// console.log(p1.__proto__ == Person.prototype);
// console.log(Person.prototype.__proto__);
// console.log(Person.prototype.__proto__ == Object.prototype);
// console.log(Person.prototype.__proto__.constructor == Object);
// console.log(p2.__proto__.__proto__.constructor == Object);


/*
let SubType = function(){
    this.name = 'subType';
}

SubType.prototype.sayName = function(){
    console.log(this.name);
}

let SuperType = function(){
    this.name = 'superType';
    this.age = 30;
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

SuperType.prototype.sayInfo = function () {
    console.log(this.name + this.age);
}

SubType.prototype = new SuperType();
// 这种方式有两个问题：
// 1. 父类的实例属性变成了子类的原型属性
// 2. 子类实例化时，不能给父类构造函数传参
// 解决方法：盗用构造函数

let instance = new SubType();
console.log(instance.name);
console.log(instance.age);
instance.sayName();
instance.sayInfo();
*/

/*
// 组合继承： 盗用构造函数（继承实例属性和方法） + 原型链（继承原型属性和方法）
let Animal = function (name) {
    this.name = name
}
Animal.prototype.sayName = function () {
    console.log(this.name);
}

let Person = function () {
    Animal.call(this, 'wallace');
    this.age = 30;
}
Person.prototype = new Animal();

let p = new Person();
// console.log(p.name + p.age);
p.sayName();
*/

// 类
class Person {
    constructor(name) {
        this.name = name;
        this.sayName = function () {
            console.log('my name is ' + name);
        }
    }

    sayAge() {
        console.log('my age is 30.');
    }

    static sayHello () {
        console.log('hello everyone');
    }
}

let p = new Person('wallace');
p.sayName();
p.sayAge();
Person.sayHello();
Person.prototype.sayAge();


// 继承
class Chinese extends Person {
    constructor(color) {
        super('wang');
        this.skinColor = color
        this.sayName = function (){
            // super.sayName();
            console.log( 'and my skin is ' + this.skinColor);
        }
    }
    sayAge(){
        console.log('子类方法执行');
        super.sayAge();
    }


}

let wang = new Chinese('yellow');
wang.sayName();
wang.sayAge();
Chinese.sayHello();
