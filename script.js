let btn = document.querySelector('.burger-button')
let moba = document.querySelector('.header')
let flag = false;

btn.addEventListener('click', () => {
    if (flag === false) {
        moba.style.height = '280px';
        flag = true
    } else {
        moba.style.height = '30px';
        flag = false
    }
})



