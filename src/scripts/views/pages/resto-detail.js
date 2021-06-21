/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser'
import TheRestoSource from '../../data/restourant-source'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const RestoDetail = {
  async render () {
    return `
            <section class="container-detail">
                <div id="loading"><img src="./images/loading.svg" alt="Loading..." loading="lazy"></div>
                <div id="detailResto"></div>
                <div id="likeButtonContainer"></div>
            </section>
        `
  },

  async afterRender () {
    const url = UrlParser.parseUrlWithoutCombiner()
    const restoInfo = await TheRestoSource.detailResto(url.id)
    const detail = document.querySelector('#detailResto')
    const loading = document.querySelector('#loading')
    loading.style.display = 'none'

    let kategori = ''
    let makanan = ''
    let minuman = ''
    let errorPage = ''
    let reviews = ''

    errorPage += `
            <div class="error">
                <img class="img-error" src="./images/error.svg" alt="Error" loading="lazy">
                <h2 class="text-error">Ooops... Ada yang gak beres nih. Sabar ya, Tim kami sedang memperbaikinya.</h2>
            </div>
        `

    if (restoInfo.error === false) {
      restoInfo.restaurant.categories.forEach((dataKategori) => {
        kategori += `
                <a href="#" class="item-kategori"><i class="fas fa-clipboard"></i> ${dataKategori.name}</a>
            `
      })

      restoInfo.restaurant.menus.foods.forEach((food) => {
        makanan += `
            <div class="list-item">
                <div class="item-icon">
                    <img src="./images/foods.jpg" alt="${food.name}" title="${food.name}">
                </div>
                <div class="item-title">
                    <h3>${food.name}</h3>
                </div>
                <div class="item-order">
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        `
      })

      restoInfo.restaurant.menus.drinks.forEach((drink) => {
        minuman += `
            <div class="list-item">
                <div class="item-icon">
                    <img src="./images/drinks.jpg" alt="${drink.name}" title="${drink.name}">
                </div>
                <div class="item-title">
                    <h3>${drink.name}</h3>
                </div>
                <div class="item-order">
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        `
      })

      restoInfo.restaurant.customerReviews.forEach((review) => {
        reviews += `
            <div class=" review-card">
                <div class="review-image">
                    <img src="./images/user.jpg" alt="User ${review.name || 'Anonymous'}" loading="lazy">
                </div> 
                <div class="review-content">
                    <div class="review-user-name">
                        ${review.name || 'Anonymous'}
                    </div>
                    <div class="review-user-date">
                        ${review.date}
                    </div>
                    <div class="review-user-value">${review.review || 'Bagus Banget Tempatnya'}</div>
                </div>
            </div>
        `
      })

      detail.innerHTML +=
        `
        <div class="breadcrumb">
            <div class="breadcrumb-list">
                <a class="page-home" href="/#">Daftar Restoran</a> /
                <a class="page-now" href="javascript:void(0)">Rumah Makan</a>
            </div>
        </div>
        <div class="detail-body">
            <div class="detail-image">
                <img src="https://restaurant-api.dicoding.dev/images/large/${restoInfo.restaurant.pictureId}" alt="${restoInfo.restaurant.name}" title="${restoInfo.restaurant.name}">
            </div>
            <div class="detail-card-info-general">
                <div class="left-info">
                    <h3>${restoInfo.restaurant.name}</h3>
                    <span class="detail-address">${restoInfo.restaurant.address}, ${restoInfo.restaurant.city}</span>
                </div>
                <div class="right-info">
                    <span>Rating <i class="fas fa-star"></i> ${restoInfo.restaurant.rating}</span>
                </div>
            </div>
            <div class="kategori-menu">
                <h2>Kategori</h2>
                <div id="menu-kategori">
                    ${kategori}
                </div>
            </div>
            <div class="item-menu">
                <div class="list-card">
                    <div class="list-title">
                        <h2>Makanan</h2>
                    </div>
                    <div class="list-body" id="makanan">
                        ${makanan}
                    </div>
                </div>
                <div class="list-card">
                    <div class="list-title">
                        <h2>Minuman</h2>
                    </div>
                    <div class="list-body" id="minuman">
                        ${minuman}
                    </div>
                </div>
            </div>
            
            <div class="review-title"><h2>Penilaian</h2></div>
            <div class="review-body">  
                <div class="review">
                    <div class="review-box">
                        <input type="text" name="name" id="reviewName" placeholder="Nama kamu...">
                        <textarea name="review" id="reviewValue" rows="5" placeholder="Tulis review kamu disini..."></textarea><br>
                        <div style="font-size:14px; color: red;" id="errorReview"></div>
                        <button class="btn-kirim" id="kirimReview">Kirim Review</button>
                    </div>
                </div>
                <div class="list-review" id="reviews">
                    ${reviews}
                </div>
            </div>
            
        </div>
    `
      const btnReview = document.querySelector('#kirimReview')
      btnReview.onclick = () => {
        const nameReviewer = document.querySelector('#reviewName').value
        const review = document.querySelector('#reviewValue').value
        sendReview(restoInfo.restaurant.id, nameReviewer, review)
      }

      const sendReview = async (id, sender, reviewValue) => {
        if (sender && reviewValue) {
          const postReview = await TheRestoSource.addReview(id, sender, reviewValue)
          if (postReview.error === false) {
            window.location.reload()
          }
        } else {
          document.querySelector('#errorReview').innerHTML = 'Harap lengkapi semua input terlebih dahulu !'
        }
      }

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto: {
          id: url.id,
          name: restoInfo.restaurant.name,
          description: restoInfo.restaurant.description,
          pictureId: restoInfo.restaurant.pictureId,
          rating: restoInfo.restaurant.rating,
          city: restoInfo.restaurant.city
        }
      })
    } else {
      detail.innerHTML += errorPage
    }
  }
}

export default RestoDetail
