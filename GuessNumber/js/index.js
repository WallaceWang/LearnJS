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
let Person = function() {}

Person.prototype.name = 'wallace';
Person.prototype.age = 30;
Person.prototype.sayHello = function(){
    console.log('hello, ' + this.name);
}

let p1 = new Person();
let p2 = new Person();

p1.sayHello();
p2.sayHello();
console.log(p1.sayHello === p2.sayHello);
console.log(Person);
console.log(Person['prototype']);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Person.prototype['constructor']);
console.log(Person.prototype.constructor == Person);
console.log(p1.prototype);
console.log(p1.__proto__);
console.log(p1.__proto__ == Person.prototype);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Person.prototype.__proto__.constructor == Object);
console.log(p2.__proto__.__proto__.constructor == Object);