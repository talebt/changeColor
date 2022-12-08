const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const colors = ['yellow','red','green','#b35998'];

colorBtn.addEventListener('click',changeColor);


function changeColor(){
bodyBcg.style.backgroundColor=colors[2];
// bodyBcg.style.backgroundColor=colors[3];

let random = Math.floor(Math.random()*colors.length)
bodyBcg.style.backgroundColor=colors[random];




}

