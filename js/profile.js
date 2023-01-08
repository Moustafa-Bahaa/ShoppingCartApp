//get data from local storage 
let getUser = localStorage.getItem("username")
let getEmail = localStorage.getItem("email")
let products = JSON.parse(localStorage.getItem("products")) || productsDB
let myProducts  = products.filter((i)=>i.isMe === "Y")
//variables
let userDom2 = document.getElementById("username")
let userEmailDom = document.getElementById("email")
let productslength = document.querySelector("#productslength span")

userDom2.innerHTML = getUser;
userEmailDom.innerHTML = getEmail 

if( myProducts.length !=0){
    productslength.innerHTML =  myProducts.length
}else{
    productslength.innerHTML = 0
}