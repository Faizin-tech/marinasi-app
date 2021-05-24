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
const itemImage = document.querySelectorAll('#itemImage');

itemImage.forEach(  (element) => {
    
    const location = element.querySelector('.itemLocation')
    
    element.addEventListener('mouseenter', () => {
        location.classList.toggle('showLocation')
    })

    element.addEventListener('mouseleave', () => {
        location.classList.toggle('showLocation')
    })
})

const itemCard = document.querySelectorAll('.itemMenu');

itemCard.forEach( (element) => {

    element.addEventListener('mouseenter', () => {
        element.classList.toggle('up');
    })

    element.addEventListener('mouseleave', () => {
        element.classList.toggle('up');
    })
})