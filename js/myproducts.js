let productsDom = document.querySelector(".products");
let noproductsDom = document.querySelector(".noProducts");

let drawProductsUI ;
(drawProductsUI = function (products=[]){
    let myProducts = products.filter((item)=>item.isMe==="Y")
    if(myProducts.length !=0){
        let productsUI = myProducts.map((item)=>{
            return `
        <div class="product-item"   style = "border:${item.isMe ==="Y"?"2px solid green":""}">
            <img src="${item.imageUrl}"  class="product-item-img">
            <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>${item.size}</span>
            <button   class='edit-product'  onclick = 'editproduct(${item.id})' > edit product </button>
            <br>
            <button   class='edit-product'  onclick = 'deleteProduct(${item.id})' >delete product</button>
            </div>
            
        </div>`    
        });
        productsDom.innerHTML = productsUI.join("");
    }else{
        noproductsDom.innerHTML= "there is no products"
    }
  
})(JSON.parse(localStorage.getItem("products")) || productsDB)

//edit product 
function editproduct(id){
    localStorage.setItem("editProduct",id)

    window.location = "editproduct.html"
}

function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB
    let myProducts = products.filter((item)=>item.isMe==="Y")
    let filtered = myProducts.filter((i)=>i.id !== id)
    let clickedItem = myProducts.find((i)=>i.id === id)
    products = products.filter((i)=> i.id !== clickedItem.id)
    localStorage.setItem("products",JSON.stringify(products))
    drawProductsUI(filtered)
} 