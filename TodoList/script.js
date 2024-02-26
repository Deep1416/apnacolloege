let btn = document.querySelector("button");

let inp = document.querySelector("input");

let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let inpValue = inp.value;

  let li = document.createElement("li");

  let btnDelete = document.createElement("button");

  li.innerText = inpValue;

  btnDelete.innerText = "Delete";

//   btnDelete.addEventListener("click", () => {
//     let par = btnDelete.parentElement;
//     par.remove();
//     console.log("Delete");
//   });

  btnDelete.classList.add("delete");
  li.classList.add("li");
  li.appendChild(btnDelete);

  ul.appendChild(li);

  console.log(inpValue);
  console.log("hiii");
  inp.innerText = ""; // smajha nhi a rha hai
});


// let deleted = document.querySelectorAll(".delete");

// for(deletes of deleted){

//     console.log("hello Delete");
//     deletes.addEventListener(("click") ,() =>{
//         let par = deletes.parentElement;

//         par.remove();
//     })
// }


ul.addEventListener(("click") ,(e)=>{
console.log("ul");
if(e.target.nodeName == "BUTTON"){
let par = e.target.parentElement;
console.log(par);
par.remove();
}
});