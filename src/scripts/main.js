// Event Navbar Mobile
const navBtn = document.querySelector('.navBtn');

navBtn.onclick = ()=> {
    navBtn.classList.toggle('hiden');
    const navList = document.querySelectorAll('.navList');
    navList.forEach(data => {
        data.classList.toggle('show');
    })
}
