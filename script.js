const password = document.querySelector("#pas");

const conf = document.querySelector("#pas-conf");

conf.addEventListener('input', () => {
    if(password.value === conf.value){
        conf.setCustomValidity("");
    }else{
        conf.setCustomValidity("Passwords do not match");
    }
})
