const goalNum = parseInt(Math.random() * 100);

const button = document.querySelector('button');
button.addEventListener('click', check);

function check() {
    const input = document.querySelector('input');
    const inputValue = parseInt(input.value);
    if (inputValue) {
        if (inputValue > goalNum) {
            const errorP = document.createElement('p');
            errorP.textContent = "请输入数字大了！"
            errorP.textContent.fontcolor = 'red';
            document.body.appendChild(errorP);
        } else if (inputValue < goalNum) {
            const errorP = document.createElement('p');
            errorP.textContent = "请输入数字小了！"
            errorP.textContent.fontcolor = 'red';
            document.body.appendChild(errorP);
        } else {
            const errorP = document.createElement('p');
            errorP.textContent = "恭喜你猜对了！"
            errorP.textContent.fontcolor = 'green';
            document.body.appendChild(errorP);
        }
    } else {
        const errorP = document.createElement('p');
        errorP.textContent = "请输入数字！"
        errorP.textContent.fontcolor = 'red';
        document.body.appendChild(errorP);
    }
}
