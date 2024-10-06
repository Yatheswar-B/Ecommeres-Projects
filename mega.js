let nav=document.getElementById("navbar");
let closes=document.getElementById("close")
let menu=document.getElementById("menu");
menu.addEventListener("click",()=>{
    nav.style.right="0px";
})
closes.addEventListener("click",()=>{
    nav.style.right="-300px";
})

let small=document.getElementsByClassName("small-p");
let large=document.getElementById("large");

console.log(small.length);
for (let i = 0; i < small.length; i++) {
    small[i].addEventListener("click",()=>{
        large.src=small[i].src;
    })
    
}



