let btn = document.getElementById("btn");
let h2 = document.querySelector("h2");
btn.addEventListener("click", () => {
    inp.value = "";
    h2.innerText = "Writen Name";
  console.log("Mouse Out");
  btn.style.color = "green";
  btn.style.backgroundColor = "black";
  btn.style.fontSize = "15px";
  
});


let inp = document.querySelector("input");
inp.addEventListener("keydown", () => {
    let a =inp.value.replace(/[^a-zA-Z\s]/g, '');
    console.log(a);
    
    h2.innerText = a;
});