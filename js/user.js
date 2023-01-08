let userInfo=document.querySelector("#user-info")
let userDom=document.querySelector("#user")
let links=document.querySelector("#links")
let logOutBtn=document.querySelector("#logout")

let username = localStorage.getItem("username")
if(username){
    links.remove()
    userInfo.style.display="flex"
    userDom.innerHTML = username;
}
logOutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location="index.html"
    },1500)
})