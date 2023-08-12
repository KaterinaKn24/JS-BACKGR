let sqr = document.querySelector('.square');
let btnbg = document.querySelector('.buttonbg');


btnbg.addEventListener ('click', (ev) => {
    sqr.classList.toggle ('squarebg');
});

sqr.addEventListener('click', (ev) => {
    sqr.classList.remove('squarebg'); 
})

let btn = document.querySelector('.buttn');
let rndmNum = Math.floor(Math.random() * 10);
console.log(rndmNum);

btn.addEventListener('click', (ev) => {
  let min = 0;
  let max = 10;
  let rndmNumb =  Math.floor(Math.random() * (max - min+ 1)) + min;

  sqr.innerHTML = rndmNumb;
});