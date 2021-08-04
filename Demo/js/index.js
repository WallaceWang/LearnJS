const para = document.querySelector('p');

document.addEventListener('click', updateName);

function updateName(){
    let newName = prompt('请输入一个名字');
    console.log(newName);
    para.textContent = '姓名' + newName;
}


document.addEventListener('DOMContentLoaded', function(){
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = '这是动态创建的元素';
        document.body.appendChild(para);
    }
    let button = document.querySelector('button');
    button.addEventListener('click', createParagraph);

});
