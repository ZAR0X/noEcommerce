let mainImg = document.getElementById("mainImg")
let smallImg = document.getElementsByClassName("small-img")
let imgID = window.sessionStorage.getItem("imgID");
window.sessionStorage.removeItem("imgID");

const products = document.getElementsByClassName("pro");

for (let index = 0; index < products.length; index++) {
    let element = products[index]
    element.onclick = ()=>{
        window.sessionStorage.setItem("imgID", String(index+9));
        window.location.href = 'sproduct.html';
    }
};

let imgSrc = Number(imgID)<9 ? `f${imgID}` : `n${imgID-8}`

mainImg.src = `img/products/${imgSrc}.jpg`

for (let element of smallImg) {
    element.src = imgID>5 ? "" : element.src
    element.onclick = ()=>{
        mainImg.src = element.src;
    }
};
