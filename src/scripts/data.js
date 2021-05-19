
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach((data) => {
        dataList +=`
        <a href="#" class="itemMenu">
            <div class="slice itemImage">
                <span class="itemLocation showLocation"><i class="fas fa-map-marker-alt"></i> ${data['city']}</span>
                <img src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            </div>
            <div class="slice itemContent">
                <div class="slice itemRating">
                    <span class="rating">Rating
                        
                    <i class="fas fa-star"></i>
                        ${data['rating']}
                    </span>
                </div>
                <div class="slice itemName">
                    <h3>${data['name']}</h3>
                </div>
                <div class="slice itemDescription">${data['description'].slice(0, 150)}...</div>
            </div>
        </a>
            `;
        });
    document.querySelector('#menu').innerHTML = dataList;  

});

