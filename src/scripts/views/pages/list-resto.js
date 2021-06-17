import TheRestoSource from '../../data/restourant-source'
import { createListRestourants } from '../templates/template-creator'

const ListResto = {
  async render () {
    return `
    <div class="hero">
        <div class="heroImage"></div>
        <h1>Marinasi App</h1>
        <h2>Makan Apa Hari Ini?</h2>
        <a href="#content" class="heroBtn">Cari Disini!</a>
    </div>
    <section class="listMenu">
            <h2>Explore Restaurant</h2>
            <div class="contentMenu" id="menu"></div>
    </section>
      `
  },

  async afterRender () {
    console.log('home')
    // Fungsi ini akan dipanggil setelah render()
    const resto = await TheRestoSource.listResto()
    console.log(resto)
    const restoContainer = document.querySelector('#menu')

    if (resto.error !== true) {
      resto.restaurants.forEach((res) => {
        console.log(res)
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
