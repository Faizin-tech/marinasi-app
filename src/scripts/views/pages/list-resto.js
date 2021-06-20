/* eslint-disable no-unused-vars */

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
          <input type="text" name="search" id="keyword" placeholder="Cari Disini..">
          <a href="#content" id="search" class="heroBtn"><i class="fa fa-search"></i></a>
        </div>
    </div>
    <section class="listMenu">
        <h2>Explore Restaurant</h2>
        <div id="loading" c><img src="./images/loading.svg" alt="Loading..." loading="lazy"></div>
        <div id="menu"></div>
    </section>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await TheRestoSource.listResto()
    const restoContainer = document.querySelector('#menu')
    const loading = document.querySelector('#loading')
    let errorPage = ''
    let notfoundPage = ''
    let list = ''

    list += `
    <div class="contentMenu" id="list"></div> 
    `

    errorPage += `
            <div class="error">
                <img class="img-error" src="./images/error.svg" alt="Error" loading="lazy">
                <h2 class="text-error">Ooops... Ada yang gak beres nih. Sabar ya, Tim kami sedang memperbaikinya.</h2>
            </div>
        `
    notfoundPage += `
        <div class="error">
            <img class="img-error" src="./images/sad.svg" alt="Error" loading="lazy">
            <h2 class="text-error">Maaf... Resto belum terdaftar.</h2>
        </div>
    `

    if (resto.error === false) {
      loading.style.display = 'none'
      restoContainer.innerHTML += list
      const listResto = document.querySelector('#list')

      resto.restaurants.forEach((res) => {
        listResto.innerHTML += createListRestourants(res)
      })
    } else {
      restoContainer.innerHTML += errorPage
      loading.style.display = 'none'
    }

    const searchBtn = document.querySelector('#search')
    const keyword = document.querySelector('#keyword')
    searchBtn.onclick = async () => {
      restoContainer.innerHTML = ''
      loading.style.display = 'block'
      if (keyword.value === null) {
        restoContainer.innerHTML += list
        const listResto = document.querySelector('#list')

        resto.restaurants.forEach((res) => {
          listResto.innerHTML += createListRestourants(res)
        })
        loading.style.display = 'none'
      } else {
        const resultResto = await TheRestoSource.searchResto(keyword.value)
        if (resultResto.restaurants.length === 0) {
          restoContainer.innerHTML += notfoundPage
          loading.style.display = 'none'
        } else {
          restoContainer.innerHTML += list
          const listResto = document.querySelector('#list')

          resultResto.restaurants.forEach((res) => {
            listResto.innerHTML += createListRestourants(res)
          })
          loading.style.display = 'none'
        }
      }
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
