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
        let chip1 = document.getElementById('1');
        let chip2 = document.getElementById('2');
        let chip3 = document.getElementById('3');
        let chip4 = document.getElementById('4');
        let chip5 = document.getElementById('5');
        let chip6 = document.getElementById('6');
        let chip7 = document.getElementById('7');
        let chip8 = document.getElementById('8');
        let chip9 = document.getElementById('9');
        switch(e.target.id) {
            case '1':
                if(!chip2.textContent){
                    let a = numArr.indexOf(chip2.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip2.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip4.textContent){
                    let a = numArr.indexOf(chip4.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip4.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '2':
                if(!chip1.textContent){
                    let a = numArr.indexOf(chip1.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip1.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip3.textContent){
                    let a = numArr.indexOf(chip3.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip3.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip5.textContent){
                    let a = numArr.indexOf(chip5.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip5.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '3':
                if(!chip2.textContent){
                    let a = numArr.indexOf(chip2.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip2.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip6.textContent){
                    let a = numArr.indexOf(chip6.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip6.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '4':
                if(!chip1.textContent){
                    let a = numArr.indexOf(chip1.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip1.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip5.textContent){
                    let a = numArr.indexOf(chip5.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip5.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip7.textContent){
                    let a = numArr.indexOf(chip7.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip7.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '5':
                if(!chip2.textContent){
                    let a = numArr.indexOf(chip2.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip2.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip4.textContent){
                    let a = numArr.indexOf(chip4.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip4.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip6.textContent){
                    let a = numArr.indexOf(chip6.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip6.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip8.textContent){
                    let a = numArr.indexOf(chip8.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip8.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '6':
                if(!chip3.textContent){
                    let a = numArr.indexOf(chip3.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip3.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip5.textContent){
                    let a = numArr.indexOf(chip5.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip5.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip9.textContent){
                    let a = numArr.indexOf(chip9.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip9.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '7':
                if(!chip4.textContent){
                    let a = numArr.indexOf(chip4.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip4.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip8.textContent){
                    let a = numArr.indexOf(chip8.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip8.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '8':
                if(!chip7.textContent){
                    let a = numArr.indexOf(chip7.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip7.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip5.textContent){
                    let a = numArr.indexOf(chip5.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip5.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip9.textContent){
                    let a = numArr.indexOf(chip9.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip9.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
            case '9':
                if(!chip6.textContent){
                    let a = numArr.indexOf(chip6.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip6.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                } else if(!chip8.textContent){
                    let a = numArr.indexOf(chip8.textContent);
                    let b = numArr.indexOf(e.target.textContent);
                    numArr[a] = e.target.textContent;
                    numArr[b] = chip8.textContent;
                    for(let i = 0; i < chipArr.length; i++){
                        chipArr[i].textContent = numArr[i];
                    }
                }
                break;
        }
    });
}
