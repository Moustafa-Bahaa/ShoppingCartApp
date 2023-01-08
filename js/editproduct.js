//variables
let products= JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"))
let getProduct = products.find(i=>i.id === productId)
let productName = document.querySelector("#product-name")
let productDesc = document.querySelector("#product-desc")
let productSizeSelect = document.querySelector("#product-size")
let updateForm = document.querySelector("#update-form")
let uploadFile = document.querySelector("#upload-image-file")
let productSizeValue;
let productImage

productName.value = getProduct.title
productDesc.value = getProduct.desc
productSizeSelect.value = getProduct.size
productImage = getProduct.imageUrl

//events
productSizeSelect.addEventListener("change",getProductSizeValue)
updateForm.addEventListener("submit",updateProductFun)
uploadFile.addEventListener("change",uploadImage)

//functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}
function updateProductFun(e){
    e.preventDefault()

    getProduct.title = productName.value 
    getProduct.desc =  productDesc.value
    getProduct.size = productSizeSelect.value 
    getProduct.imageUrl = productImage

    localStorage.setItem("products",JSON.stringify(products))
    setTimeout(()=>{
        window.location = "index.html"
    },500)
    /*let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
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
    */
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


 