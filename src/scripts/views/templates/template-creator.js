import CONFIG from '../../global/config'

const createListRestourants = (resto) => `
    <a href="#" class="itemMenu">
    <div class="slice itemImage">
        <span class="itemLocation"><i class="fas fa-map-marker-alt"></i> ${resto.city}</span>
        <img src="${CONFIG.BASE_IMAGE_URL}/medium/${resto.pictureId}" alt="${resto.name}" title="${resto.name}">
    </div>
    <div class="slice itemContent">
        <div class="slice itemRating">
            <span class="rating">Rating
                
            <i class="fas fa-star"></i>
                ${resto.rating}
            </span>
        </div>
        <div class="slice itemName">
            <h3>${resto.name}</h3>
        </div>
        <div class="slice itemDescription">${resto.description.slice(0, 150)}...</div>
    </div>
    </a>

`

export {
  createListRestourants
}
