
let productsDom = document.querySelector(".products");
let noproductsDom = document.querySelector(".noProducts");
function drawFavoriteProdutsUI(allProducts = []){
    if(JSON.parse(localStorage.getItem("favorriteProducts")).length===0)
    noproductsDom.innerHTML= "there is no items"
    let products = JSON.parse(localStorage.getItem("favorriteProducts")) || allProducts;
    let productsUI = products.map((item)=>{
        return `
        <div class="product-item">
        <img src="${item.imageUrl}"  class="product-item-img">
        <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>Size : ${item.size}</span> <br>
        <span>Quantity : ${item.qty}</span>
        </div>
        <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeItemFromFavorites(${item.id})">Remove from Favorite</button>
    </div>
</div>`     
    });
    productsDom.innerHTML = productsUI.join("");
}
drawFavoriteProdutsUI();

function removeItemFromFavorites(id){
    let favorriteProducts = localStorage.getItem("favorriteProducts");
    if(favorriteProducts){
    let items = JSON.parse(favorriteProducts);
    let filteredItems = items.filter((item)=>item.id!==id);
    localStorage.setItem("favorriteProducts",JSON.stringify(filteredItems))
    drawFavoriteProdutsUI(filteredItems);
    }
}
