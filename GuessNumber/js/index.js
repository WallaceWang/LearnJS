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
