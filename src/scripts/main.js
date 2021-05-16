// Event Navbar Mobile
const navBtn = document.querySelector('.navBtn');

navBtn.onclick = ()=> {
    navBtn.classList.toggle('hiden');
    const navList = document.querySelectorAll('.navList');
    navList.forEach(data => {
        data.classList.toggle('show');
    })
}

//Event Card Item Menu
const itemImage = document.querySelectorAll('#itemImage');

itemImage.forEach( async (element) => {
    console.log('ok');
    const location = await element.querySelector('.itemLocation')
    
    element.addEventListener('mouseenter', () => {
        location.classList.toggle('showLocation')
    })

    element.addEventListener('mouseleave', () => {
        location.classList.toggle('showLocation')
    })
})

const itemCard = document.querySelectorAll('.itemMenu');

itemCard.forEach( async (element) => {

    element.addEventListener('mouseenter', () => {
        element.classList.toggle('up');
    })

    element.addEventListener('mouseleave', () => {
        element.classList.toggle('up');
    })
})