
const RestoDetail = {
  async render () {
    return `
            <section class="container-detail">
                <div id="loading"><img src="./images/loading.svg" alt="Loading..." loading="lazy"></div>
                <div id="detailResto">

                </div>
            </section>
        `
  },

  async afterRender () {
    const detail = document.querySelector('#detailResto')
    const loading = document.querySelector('#loading')
    loading.style.display = 'none'

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
            <img src="https://restaurant-api.dicoding.dev/images/large/14" alt="tes" title="tes">
        </div>
        <div class="detail-card-info-general">
            <div class="left-info">
                <h3>Restouran Malaka</h3>
                <span class="detail-address">Jalan. Padegelang no 19</span>
            </div>
            <div class="right-info">
                <span>Rating <i class="fas fa-star"></i> 5</span>
            </div>
        </div>
        <div class="kategori-menu">
            <h2>Kategori</h2>
            <div id="menu-kategori">
                <a href="#" class="item-kategori"><i class="fas fa-clipboard"></i> Italia</a>
                <a href="#" class="item-kategori"><i class="fas fa-clipboard"></i> Modern</a>
            </div>
        </div>
        <div class="item-menu">
            <div class="list-card">
                <div class="list-title">
                    <h2>Makanan</h2>
                </div>
                <div class="list-body" id="makanan">
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/foods.jpg" alt="foods" title="foods">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-card">
                <div class="list-title">
                    <h2>Minuman</h2>
                </div>
                <div class="list-body" id="makanan">
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item-icon">
                            <img src="./images/drinks.jpg" alt="drinks" title="drinks">
                        </div>
                        <div class="item-title">
                            <h3>Nasi Padang</h3>
                        </div>
                        <div class="item-order">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    `
  }
}

export default RestoDetail
