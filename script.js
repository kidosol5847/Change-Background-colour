const colorBtn = document.querySelector('colorBtn');
const bodybcg = document.querySelector('body');

const colours = ['red','green','blue','#3b5998'];
colorBtn.addEventListener('click',changecolor);
function changecolor() {
    let a = Math.floor(Math.random()*colour.length);
    bodybcg.style.backgroundColor = colour[a];
}
