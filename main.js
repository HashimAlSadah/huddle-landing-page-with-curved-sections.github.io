const emailInput = document.querySelector("form input");
const errorMessage = document.querySelector(".error-message");
const subscribeButtn = document.querySelector(".subscribe");
const emailRegXep = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");

subscribeButtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const userEmail = emailInput.value;
    if(emailRegXep.test(userEmail)){
        errorMessage.classList.remove("active");
        emailInput.classList.remove("active");
    }
    if(!emailRegXep.test(userEmail)){
        errorMessage.classList.add("active");
        emailInput.classList.add("active");
    }


})