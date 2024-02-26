let div = document.querySelector("div");

let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener(("click"),()=>{
    
    console.log("insid div");
})

ul.addEventListener(("click") , (e)=>{
    e.stopPropagation();
    console.log("insid ul");
})

for(li of lis){
    
    li.addEventListener(("click"),(e)=>{
        e.stopPropagation();
        console.log("li ");
    })
}