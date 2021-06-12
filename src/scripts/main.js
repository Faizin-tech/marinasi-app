// Event Navbar Mobile
const navBtn = document.querySelector('#hamburger')
const navList = document.querySelector('#mobile')

navBtn.onclick = () => {
  console.log('ok')
  navList.classList.toggle('open')
}

const mainElement = document.querySelector('main')

mainElement.addEventListener('click', event => {
  navList.classList.remove('open')
  event.stopPropagation()
})
