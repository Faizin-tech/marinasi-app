// Event Navbar Mobile
const navBtn = document.querySelector('#hamburger');
const navList = document.querySelector('#mobile');

navBtn.onclick = ()=> {
    console.log('ok');
    // navBtn.classList.toggle('hiden');
    navList.classList.toggle('open');
    // navList.forEach(data => {
    //     data.classList.toggle('open');
    // })
}

const mainElement = document.querySelector("main");
 
mainElement.addEventListener("click", event => {
 navList.classList.remove("open");
 event.stopPropagation();
})




//Event Card Item Menu
