let products = JSON.parse(localStorage.getItem("products"))
let productId = localStorage.getItem("productId");
let productDetails = products.find((item) => item.id == productId);
let itemDom = document.querySelector(".item-details")

itemDom.innerHTML=
`
<img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>size: ${productDetails.size}</span><br>
<span>Quantity : ${productDetails.qty}</span><br>
<button onclick="editproduct(${productId})" class="editproduct">Edit Product</button>
`
//edit product 
function editproduct(id){
    localStorage.setItem("editProduct",id)
    window.location = "editproduct.html"
}