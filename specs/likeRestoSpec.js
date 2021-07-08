/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestoIdb from '../src/scripts/data/favoritesresto-db'

describe('Like a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  // Harusnya tombol like tampil
  it('Should show the like button when the Restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy()
  })

  // Harusnya tombol dont like tidak tampil
  it('Should not show the unlike button when the Restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy()
  })

  // Harusnya berhasil like resto
  it('Should be able to like a Restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const resto = await FavoriteRestoIdb.getResto(1)

    expect(resto).toEqual({ id: 1 })

    FavoriteRestoIdb.deleteResto(1)
  })

  // Harusnya resto yg sudah ada di db tidak diinsert kembali
  it('Should not add a Restaurant again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: 1
      }
    })
    await FavoriteRestoIdb.putResto({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])
    FavoriteRestoIdb.deleteResto(1)
  })
})
