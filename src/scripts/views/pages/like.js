import { createListRestourants } from '../templates/template-creator'
import FavoriteRestoIdb from '../../data/favoritesresto-db'

const Like = {
  async render () {
    return `
    <section class="listMenu">
      <h2>Liked Restaurants</h2>
      <div id="loading" c><img src="./images/loading.svg" alt="Loading..." loading="lazy"></div>
      <div id="menu"></div>
    </section>
    `
  },

  async afterRender () {
    const resto = await FavoriteRestoIdb.getAllResto()
    const restoContainer = document.querySelector('#menu')
    const loading = document.querySelector('#loading')
    let notfoundPage = ''
    let list = ''

    list += `
    <div class="contentMenu" id="list"></div> 
    `
    notfoundPage += `
        <div class="error">
            <img class="img-error" src="./images/sad.svg" alt="Error" loading="lazy">
            <h2 class="text-error">Maaf... Daftar Restourant Kesukaan Kamu Belum Ada.</h2>
        </div>
    `

    if (resto.length !== 0) {
      loading.style.display = 'none'
      restoContainer.innerHTML += list
      const listResto = document.querySelector('#list')

      resto.forEach((res) => {
        listResto.innerHTML += createListRestourants(res)
      })
    } else {
      restoContainer.innerHTML += notfoundPage
      loading.style.display = 'none'
    }

    const itemCard = document.querySelectorAll('.itemMenu')

    itemCard.forEach((element) => {
      const location = element.querySelector('.itemLocation')

      element.addEventListener('mouseenter', () => {
        element.classList.toggle('up')
        location.classList.toggle('showLocation')
      })

      element.addEventListener('mouseleave', () => {
        element.classList.toggle('up')
        location.classList.toggle('showLocation')
      })
    })
  }
}

export default Like
