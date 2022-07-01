//get elements
let btn = document.querySelector(".btn")
let icons = document.querySelector(".icons")


btn.addEventListener("click", function(){
    btn.classList.toggle("open");
    icons.classList.toggle("active")
})