let btn = document.getElementById('btn');
let color1 = document.getElementById('color');
let box = document.getElementById('box');
let p = document.querySelector('p');

btn.addEventListener(("click") ,() =>{
color1.innerText = `${randomColor()}`;
box.style.backgroundColor = randomColor();
p.style.color = randomColorp();
console.log("update");
// this.innerText = `${"CLick Me"}`
})

function randomColor(){
    
    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 225);
    let b = Math.floor(Math.random() * 225);

    let color = `rgb(${r},${g},${b})`
    return color;
}

function randomColorp(){
    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 225);
    let b = Math.floor(Math.random() * 225);

    let color = `rgb(${r},${g},${b})`
    return color;
}



// let color = randomColor();
// console.log(color);