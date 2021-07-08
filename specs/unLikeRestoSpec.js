/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestoIdb from '../src/scripts/data/favoritesresto-db'

describe('Unlike a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
    FavoriteRestoIdb.putResto({ id: 1 })
  })

  // Harusnya tombol unlike tampil
  it('harusnya menampilkan tombol batal suka', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy()
  })

  it('harusnya berhasil menekan tombol batal suka', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    document.querySelector('#likedButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})
