'use strict';
let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', ''];
function compareRandom(a, b) {
    return Math.random() - 0.5;
}

numArr.sort(compareRandom);
let chipArr = document.getElementsByClassName('chip');

for(let i = 0; i < chipArr.length; i++){
    chipArr[i].textContent = numArr[i];
    chipArr[i].addEventListener('click', (e) => {
        if(!e.target.previousElementSibling.textContent){
            let a = numArr.indexOf(e.target.previousElementSibling.textContent);
            let b = numArr.indexOf(e.target.textContent);
            numArr[a] = e.target.textContent;
            numArr[b] = e.target.previousElementSibling.textContent;
            for(let i = 0; i < chipArr.length; i++){
                chipArr[i].textContent = numArr[i];
            }

        } else if(!e.target.nextElementSibling.textContent){
            let a = numArr.indexOf(e.target.nextElementSibling.textContent);
            let b = numArr.indexOf(e.target.textContent);
            numArr[a] = e.target.textContent;
            numArr[b] = e.target.nextElementSibling.textContent;
            for(let i = 0; i < chipArr.length; i++){
                chipArr[i].textContent = numArr[i];
            }
        }
    });
}
