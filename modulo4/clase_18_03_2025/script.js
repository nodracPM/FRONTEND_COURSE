const productsListCont = document.querySelector(".productList")
const sortButton = document.getElementById("sortButton")
const filterSelector = document.getElementById('filterSelector')
const divisaButton = document.getElementById('dollars/mxn')
class Product {
    constructor(name, category, price) {
        this.name = name
        this.category = category
        this.price = price
    }
}


let fruits = ["Apples", "Bananas", "Oranges", "Grapes", "Pineapple", "Srawberry"]
let fruitsPrices = [1, 2, 3, 4, 4.5, 3]
let vegetables = ["Tomatoes", "Potatoes", "Cucumbers", "Onions", "Garlic", "Spinach"]
let vegetablesPrices = [1, 2, 1.5, 2.5, 2, 3]

let productList = []
let showedProducts = []



for(let i = 0; i < fruits.length; i++) {
    let product = new Product(fruits[i], "fruits", fruitsPrices[i])
    productList.push(product)
}
for(let i = 0; i < vegetables.length; i++) {
    let product = new Product(vegetables[i], "vegetables", vegetablesPrices[i])
    productList.push(product)
}

showedProducts = productList


for (product of showedProducts) {
    productsListCont.innerHTML += ("<li> " + product.name + " - " + product.price + "$")
}

sortButton.addEventListener("click", function(){
    showedProducts.sort((a, b) => a.name.localeCompare(b.name))
    productsListCont.innerHTML = ""
    for (product of showedProducts) {
        productsListCont.innerHTML += ("<li> " + product.name + " - " + product.price + "$")
    }
})

filterSelector.addEventListener("change", event => {
    showedProducts = productList.filter(product => product.category === event.target.value)

    //productsListCont.innerHTML = `${event.target.value}`
    productsListCont.innerHTML = ""
        
    if(event.target.value === "all") {
        showedProducts = productList
    }

    for (product of showedProducts) productsListCont.innerHTML += ("<li> " + product.name + " - " + product.price + "$")
})

divisaButton.addEventListener("click", () => {
    productsListCont.innerHTML = ""

    if (divisaButton.innerHTML === "Show prices in MXN") {
        productList.forEach(product => product.price *=20)
        divisaButton.innerHTML = "Show prices in dollars"
    }
    else {
        productList.forEach(product => product.price /= 20)
        divisaButton.innerHTML = "Show prices in MXN"
    }

    for (product of showedProducts) productsListCont.innerHTML += ("<li> " + product.name + " - " + product.price + "$")
})