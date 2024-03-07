var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-15rem";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


function learnmore(x) {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}

function learnmore2(x) {
    var menu = document.querySelector(".menu2");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}

function learnmore3(x) {
    var menu = document.querySelector(".menu3");
    menu.classList.toggle("activemenu");

    x.querySelector("i").classList.toggle("fa-caret-left");
    x.querySelector("i").classList.toggle("fa-caret-down");
}