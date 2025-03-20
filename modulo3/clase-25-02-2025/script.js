const characterLenghtShow = document.getElementById("characterLenghtShow")
const characterLenghtSlider = document.querySelector(".slider")
const checkBoxList = []
const password = document.getElementById("password")
const copyButton = document.getElementById("copyButton")

checkBoxList.push(document.getElementById("checkIncludeUppercase"))
checkBoxList.push(document.getElementById("checkIncludeLowercase"))
checkBoxList.push(document.getElementById("checkIncludeNumbers"))
checkBoxList.push(document.getElementById("checkIncludeSymbols"))
const generateButton = document.getElementById("generateButton")

characterLenghtSlider.addEventListener("input", function(){
    characterLenghtShow.innerText = characterLenghtSlider.value
})

generateButton.addEventListener("click", function(event){
    event.preventDefault()
    let characterList = []

    if(checkBoxList[0].checked) { //Include uppercase letters or not
        for(let i = 65; i<= 90; i++) {
            characterList.push(String.fromCharCode(i))
        }    
    }   

    if(checkBoxList[1].checked) {
        for(let i = 97; i <= 122; i++) { //Include lowercase letters or not
            characterList.push(String.fromCharCode(i))
        }    
    }

    
    if(checkBoxList[2].checked) { //Include numbers or not 
        for(let i = 48; i <= 57; i++) {
            characterList.push(String.fromCharCode(i))
        }
    }

    if(checkBoxList[3].checked) {
        for(let i = 33; i <= 47; i++) { //Include symbols or not
            characterList.push(String.fromCharCode(i))
        }
    }

    let passwordLenght = characterLenghtSlider.value
    let randomPassword = ""

    if(characterList.length == 0) {
        alert("Select at least one option")
        return
    }
    else {
        //Generate random password 
        for(let i = 0; i < passwordLenght; i++) {
            let index = Math.floor(Math.random()*(characterList.length - 1))
            randomPassword += characterList[index]
        }
    }

    password.innerText = randomPassword
})

copyButton.addEventListener("click", function(){
    navigator.clipboard.writeText(password.innerText)
})



