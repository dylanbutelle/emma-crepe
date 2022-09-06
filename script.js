let getName = document.getElementById("name")
let getSurName = document.getElementById("surname")
let getMail = document.getElementById("mail")
let getPhone = document.getElementById("phone")
let getDate = document.getElementById("dateBook")
let errors = 0
let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneRegex = /^0[1-9]\d{8}$/;
getName.addEventListener("keyup",()=>{
    if(getName.value === "" || getName.value === undefined){
        if(getName.classList.contains("ok")){
            getName.classList.remove("ok")
        }
        
        getName.classList.add("error")
    }else if(!getName.classList.contains("ok")){
        if(getName.classList.contains("error")){
            getName.classList.remove("error")
        }
        getName.classList.add("ok")
    }
})
getSurName.addEventListener("keyup",()=>{
    if(getSurName.value === "" || getSurName.value === undefined){
        if(getSurName.classList.contains("ok")){
            getSurName.classList.remove("ok")
        }
        
        getSurName.classList.add("error")
    }else if(!getSurName.classList.contains("ok")){
        if(getSurName.classList.contains("error")){
            getSurName.classList.remove("error")
        }
        getSurName.classList.add("ok")
    }
})
getMail.addEventListener("keyup",()=>{
    if(!getMail.value.match(mailRegex)){
        if(getMail.classList.contains("ok")){
            getMail.classList.remove("ok")
        }
        
        getMail.classList.add("error")
    }else if(!getMail.classList.contains("ok")){
        if(getMail.classList.contains("error")){
            getMail.classList.remove("error")
        }
        getMail.classList.add("ok")
    }
})
getPhone.addEventListener("keyup",()=>{
    if(!getPhone.value.match(phoneRegex)){
        if(getPhone.classList.contains("ok")){
            getPhone.classList.remove("ok")
        }
        
        getPhone.classList.add("error")
    }else if(!getPhone.classList.contains("ok")){
        if(getPhone.classList.contains("error")){
            getPhone.classList.remove("error")
        }
        getPhone.classList.add("ok")
    }
})

getDate.addEventListener("keyup",()=>{
    if(getDate.value === "" || getSurName.value === undefined){
        if(getDate.classList.contains("ok")){
            getDate.classList.remove("ok")
        }
        
        getDate.classList.add("error")
    }else if(!getDate.classList.contains("ok")){
        if(getDate.classList.contains("error")){
            getDate.classList.remove("error")
        }
        getDate.classList.add("ok")
    }
})
getDate.addEventListener("change",()=>{
    if(getDate.value === "" || getSurName.value === undefined){
        if(getDate.classList.contains("ok")){
            getDate.classList.remove("ok")
        }
        
        getDate.classList.add("error")
    }else if(!getDate.classList.contains("ok")){
        if(getDate.classList.contains("error")){
            getDate.classList.remove("error")
        }
        getDate.classList.add("ok")
    }
})

function verifie(){
    let form = document.getElementsByTagName("form")[0]
    let msg = document.getElementsByClassName("msg")[0]
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
    })
    let getGood = document.getElementsByClassName("ok")
    msg.innerHTML = ""
    if(getGood.length < 5){
        
        let createP = document.createElement("p")
        createP.style.color="red"
        createP.innerHTML = "Oups... Il y a des erreurs dans votre réservation..."
        msg.appendChild(createP)
    }else{
        let createP = document.createElement("p")
        createP.style.color="green"
        createP.innerHTML = "Votre réservation a été enregistrée avec succés !"
        msg.appendChild(createP)
    }
}