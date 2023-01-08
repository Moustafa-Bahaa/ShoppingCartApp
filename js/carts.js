
let productsDom = document.querySelector(".products");
let noproductsDom = document.querySelector(".noProducts");
function drawCartProdutsUI(allProducts = []){
    if(JSON.parse(localStorage.getItem("productsInCart")).length===0)
    noproductsDom.innerHTML= "there is no items"
    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
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
        <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove from Cart</button>
    </div>
</div>`
        
    });
    productsDom.innerHTML = productsUI.join("");
}
drawCartProdutsUI();

function removeItemFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart");
if(productsInCart){
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item)=>item.id!==id);
    localStorage.setItem("productsInCart",JSON.stringify(filteredItems))
    drawCartProdutsUI(filteredItems);
    }
}