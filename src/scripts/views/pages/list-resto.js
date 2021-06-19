import TheRestoSource from '../../data/restourant-source'
import { createListRestourants } from '../templates/template-creator'

const ListResto = {
  async render () {
    return `
    <div class="hero">
        <div class="heroImage"></div>
        <h1>Marinasi App</h1>
        <h2>Makan Apa Hari Ini?</h2>
        <div class="searchContent">
          <input type="text" name="search" placeholder="Cari Disini..">
          <a href="#content" class="heroBtn"><i class="fa fa-search"></i></a>
        </div>
    </div>
    <section class="listMenu">
        <h2>Explore Restaurant</h2>
        <div id="loading" c><img src="./images/loading.svg" alt="Loading..." loading="lazy"></div>
        <div class="contentMenu" id="menu"></div>
    </section>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await TheRestoSource.listResto()
    const restoContainer = document.querySelector('#menu')
    const loading = document.querySelector('#loading')

    if (resto.error !== true) {
      loading.style.display = 'none'
      resto.restaurants.forEach((res) => {
        restoContainer.innerHTML += createListRestourants(res)
      })
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

export default ListResto
