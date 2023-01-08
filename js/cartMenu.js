let badgeDom = document.querySelector(".badge")
let cartproductsDivDom = document.querySelector(".cart-products div")
let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartproductMenu = document.querySelector(".cart-products");

//events
shoppingCartIcon.addEventListener("click",dropDownMenu);
//check if there are items in local storage 
let addedItem = localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')): [];
if(addedItem){
    addedItem.map((item)=>{
        cartproductsDivDom.innerHTML +=`<p>${item.title} ${item.qty}</p>`;
    });
    badgeDom.style.display="block"
    badgeDom.innerHTML=addedItem.length
}; 

// drop down menu 
function dropDownMenu(){
    if(cartproductsDivDom.innerHTML !=""){
        if( cartproductMenu.style.display == "block"){
            cartproductMenu.style.display = "none"
        }else{
            cartproductMenu.style.display = "block"
        }
    }
}
