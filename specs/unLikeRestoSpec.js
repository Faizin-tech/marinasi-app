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
  it('Shoul show then unlike button when the restouran has been unlike before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy()
  })

  it('Should be able to unlike a restourant', async () => {
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
