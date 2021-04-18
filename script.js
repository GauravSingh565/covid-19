window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
var menuBtn = document.querySelector(".menu");
var menuOpen = false;
menuBtn.addEventListener("click", function() {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
})
let scroll=document.querySelector(".scroll");
window.onscroll=function(){
    shcrollfun();
}
function shcrollfun(){
    if(document.body.scrollTop>35 || document.documentElement.scrollTop>35){
        scroll.style.display="block";
    }else{
        scroll.style.display="none";
    }
}

var menu = document.getElementById("uitem");
menu.style.maxHeight = "0px";
menuBtn.addEventListener("click", function() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "280px"
        menu.style.padding="15px 0px"
    } else {
        menu.style.maxHeight = "0px"
        menu.style.padding="0px"
    }
})
