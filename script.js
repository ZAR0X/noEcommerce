// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}  

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}  

const products = document.getElementsByClassName("pro");

for (let index = 0; index < products.length; index++) {
    let element = products[index]
    element.getElementsByTagName("img")[0].onclick = ()=>{
        window.sessionStorage.setItem("imgID", String(index+1));
        window.location.href = 'sproduct.html';
    }
    element.getElementsByClassName("des").onclick = ()=>{
        window.sessionStorage.setItem("imgID", String(index+1));
        window.location.href = 'sproduct.html';
    }
};


document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.dialog-box').style.display = 'none';
  });
