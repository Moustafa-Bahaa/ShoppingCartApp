

//Define products
let productsDom = document.querySelector(".products");
let products = productsDB



//display products
let drawProductsUI ;
(drawProductsUI = function (products=[]){
    let productsUI = products.map((item)=>{
        return `
        <div class="product-item"   style = "border:${item.isMe ==="Y"?"2px solid green":""}">
        <img src="${item.imageUrl}"  class="product-item-img">
        <div class="product-item-desc">
        <a onclick="saveItemData(${item.id})">${item.title}</a>
        <p>${item.desc}</p>
        <span>${item.size}</span>
        ${item.isMe ==="Y" &&"<button   class='edit-product'    onclick = 'editproduct("+item.id+")' >edit product</button>" }
        </div>
        <div class="product-item-actions">
        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
        <i class="favorite fa fa-heart-o" style = "color:${item.liked===true?"red":""}" onclick="addToFavorite(${item.id})"></i>   
    </div>
</div>`    
    });
    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products)


//add to cart
function addedToCart(id){
    if(localStorage.getItem("username")){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB ;
    let product = products.find((item)=>item.id===id);
    let isProductInCart = addedItem.some((i) => i.id === product.id) ;

    if(isProductInCart){
      addedItem =addedItem.map((p) =>{
        if(p.id ===product.id) p.qty +=1;
        return p ;
      })  
    }else{
        addedItem.push(product);
    }
    //ui
    cartproductsDivDom.innerHTML ="" ;
    addedItem.forEach((item)=>{
        cartproductsDivDom.innerHTML +=`<p>${item.title} <span  class="item-qty">${item.qty}</span> </p>`;
    });
    //save data 
    localStorage.setItem('productsInCart',JSON.stringify(addedItem))
    //add counter of items 
    let cartproductItems = document.querySelectorAll(".cart-products div p")
    badgeDom.style.display="block"
    badgeDom.innerHTML=cartproductItems.length
    }else{
        window.location = "login.html";
    }
}

function getUniqueArr(arr , filtertype){
    let unique = arr
    .map((item)=>item[filtertype])
    .map((item, i , final) => final.indexOf(item) === i && i )
    .filter((item)=>arr[item])
    .map((item)=>arr[item]);
    return unique;
}


function saveItemData(id){
    localStorage.setItem("productId", id)
    window.location = "cartDetails.html"
}

//search function

let input = document.querySelector("#search");
input.addEventListener("keyup",function(e){
        search(e.target.value , JSON.parse(localStorage.getItem("products")))
    if(e.target.value.trim()==="")
    drawProductsUI(JSON.parse(localStorage.getItem("products")))
})

function search(title , myArray){
    let arr = myArray.filter((item)=> item.title.tolowercase().indexOf(title.tolowercase()) !== -1)
    drawProductsUI(arr)
}

//add to favourite
let favoriteItems = localStorage.getItem('favorriteProducts')? JSON.parse(localStorage.getItem('favorriteProducts')): [];
function addToFavorite(id){
    if(localStorage.getItem("username")){
    let choosenItem = products.find((item)=>item.id===id);
    choosenItem.liked = true
    favoriteItems = [...favoriteItems , choosenItem]
    let uniqueProducts = getUniqueArr(favoriteItems , "id")
    localStorage.setItem("favorriteProducts",JSON.stringify(uniqueProducts))
    products.map((item)=>{
        if(item.id === choosenItem.id ){
            item.liked = true;
        }
    });
    localStorage.setItem('products',JSON.stringify(products))
    drawProductsUI(products)
    }else{
        window.location = "login.html";
    }
}

//filter products by size 
let sizeFilter = document.getElementById("size-filter")
sizeFilter.addEventListener("change" , getProductsFilteredBySize)
function getProductsFilteredBySize(e){
let val = e.target.value;
let products = JSON.parse(localStorage.getItem("products")) || products 
if(val === "all"){
    drawProductsUI(products)
}else{
    products = products.filter((i)=>i.size === val)
    drawProductsUI(products)
}
}
//edit product 
function editproduct(id){
    localStorage.setItem("editProduct",id)
    window.location = "editproduct.html"
}

