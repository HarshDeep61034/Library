const sidebarEl = document.getElementsByClassName('sidebar')[0];
const addEl = document.getElementsByClassName('add')[0];
const mainEl = document.getElementsByClassName('main')[0];
addEl.addEventListener('click', ()=>{
    console.log("hello")
    sidebarEl.style.display = "inline-block";
    mainEl.style.width = "83vw";
});