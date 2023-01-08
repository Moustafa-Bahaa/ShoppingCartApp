//variables
let productName = document.querySelector("#product-name")
let productDesc = document.querySelector("#product-desc")
let productSizeSelect = document.querySelector("#product-size")
let CreateForm = document.querySelector("#create-form")
let uploadFile = document.querySelector("#upload-image-file")
let productSizeValue;
let productImage
//events
productSizeSelect.addEventListener("change",getProductSizeValue)
CreateForm.addEventListener("submit",createProductFun)
uploadFile.addEventListener("change",uploadImage)
//functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}
function createProductFun(e){
    e.preventDefault()
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value
    let descValue = productDesc.value
    if(nameValue && descValue ){
        let obj = {
            id:allProducts ? allProducts.length +1 : 1 ,
            qty:1,
            imageUrl: productImage,
            size: productSizeValue,
            title:nameValue,
            desc:descValue,
            isMe :"Y"
        };
        let newProducts =allProducts? [...allProducts , obj] : [obj];
        localStorage.setItem("products",JSON.stringify(newProducts))
        productName.value = ""
        productDesc.value = ""
        productSizeSelect.value = ""
        setTimeout(()=>{
            window.location = "index.html"
        },500)
    }else{
        alert("enter data")
    }
   
}
function uploadImage(){
    let file = this.files[0]
    console.log(file);
    let types = ["image/jpeg","image/png"]
    if(types.indexOf(file.type)==-1){
        alert("file type not supported")
        return;
    }

    if(!file.size > 2*1024 ){
        alert("file size cant exceed 2 mega")
        return;
    }
    getImageBase64(file)
}
function getImageBase64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload =function(){
        productImage = reader.result
    }
    reader.onerror = function(){
        alert("error!")
    }
}
 