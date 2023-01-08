let getLang = localStorage.getItem("langDir")
if(getLang){
    if(getLang === "rtl"){
        changeDir("rtl")
    }else{
        changeDir("ltr")
    }
}
//change language 
let en = document.getElementById("en-lang")
let ar = document.getElementById("ar-lang")


//events 
en.addEventListener("click",()=>changeDir("ltr"))
ar.addEventListener("click",()=>changeDir("rtl"))

//functions
function changeDir(dir){
    document.documentElement.setAttribute("dir",dir)
    localStorage.setItem("langDir",dir)
}