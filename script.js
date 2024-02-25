console.log("Hello world!")


let formElements = document.querySelectorAll("form input")
let passwordInput = document.querySelector("#password");
let passwordCInput = document.querySelector("#passwordC");
let submit = document.querySelector("button")

passwordInput.addEventListener("input", checkPassword)
passwordCInput.addEventListener("input", checkPassword)

function checkPassword(){
    let match = passwordInput.value != passwordCInput.value;
    let notEmpty = passwordInput.value != "" && passwordCInput.value != ""

    if (match && notEmpty){
        passwordInput.classList.add("error");
        passwordCInput.classList.add("error");
    }
    else{
        passwordInput.classList.remove("error");
        passwordCInput.classList.remove("error");
    }
};

submit.addEventListener("click", ()=>{
    formElements.forEach(element => {
        console.log(element)
        if (element.value == ""){
            element.classList.add("error");
            element.addEventListener("input", function eventHandler(){
                element.classList.remove("error");
                element.removeEventListener("input", eventHandler);
            });
        }
    });
});