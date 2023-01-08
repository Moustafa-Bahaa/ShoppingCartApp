//get data from local storage 
let getUser = localStorage.getItem("username")
let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

//variables
let userInput = document.getElementById("changeName")
let userEmailInput = document.getElementById("changeEmail")
let userPasswordInput = document.getElementById("changepassword")
let userProfilePicture = document.getElementById("update-image")
let editForm = document.getElementById("edit-profile-form")


//setting values of input 
userInput.value = getUser;
userEmailInput.value = getEmail 
userPasswordInput.value = getPassword
//events 
editForm.addEventListener("submit" , EditProfileData)
 
function EditProfileData(e){
    e.preventDefault()
    localStorage.setItem("username",userInput.value)
    localStorage.setItem("email",userEmailInput.value)
    localStorage.setItem("password",userPasswordInput.value)
    setTimeout(()=>{
        window.location = "profile.html"
    }, 500 )
}

/**
 * function uploadImage(){
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
 
 */