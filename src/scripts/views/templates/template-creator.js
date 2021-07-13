import CONFIG from '../../global/config'

const createListRestourants = (resto) => `
    <div class="itemMenu">
        <div class="slice itemImage">
            <span class="itemLocation"><i class="fas fa-map-marker-alt"></i> ${resto.city}</span>
            <picture>
                <source media="(max-width: 450px)" data-srcset="${CONFIG.BASE_IMAGE_URL}/small/${resto.pictureId}">
                <img data-src="${CONFIG.BASE_IMAGE_URL}/medium/${resto.pictureId}" class="lazyload" alt="${resto.name}" title="${resto.name}">
            </picture>
        </div>
        <div class="slice itemContent">
            <div class="slice itemRating">
                <span class="rating">Rating
                    
                <i class="fas fa-star"></i>
                    ${resto.rating}
                </span>
            </div>
            <div class="slice itemName">
                ${resto.name}
            </div>
            <div class="slice itemDescription">${resto.description.slice(0, 150)}...</div>
            <div id="itemCTA">
                <a href="/#/detail/${resto.id}">Lihat Detail</a>
            </div>
        </div>
    </div>

`
const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likedButton" class="like">
    <i class="fa fa-trash" aria-hidden="true"></i>
  </button>
`

const offlineCondition = `
  <section>
    <div class="offline">
      <img class="img-error" style="width: 40%;" class="lazyload" src="./images/error.svg" alt="Error" loading="lazy">
      <h2 class="text-error">Ooops... Sepertinya Internet Anda Mati, Periksa Dulu Ya Jaringannya.</h2>
    </div>
  </section>
`

export {
  createListRestourants,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  offlineCondition
}
