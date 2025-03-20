// (ES6) const, let and var

// var: se puede reasignar y redeclarar en cualquier parte del código. 
// let: se puede reasignar pero no se puede redeclarar en el mismo ámbito (proyecto). 
// const: no se puede reasignar ni redeclarar


// arrow functiions 

const multiplicationArrow = (a, b) => a * b 
function multiplicationFunction (a, b) {
    return a * b
}

console.log(multiplicationArrow(2,3))   

const myArray = [1, 2, 3]
myArray.push(4)
console.log(myArray)


// Template literals 
// It's useful to make dynamic strings 

const name = "Alicia"
const lastName = "Jiménez"

const fullName = `Mi nombre es ${name} ${lastName}`
console.log(fullName)

// Operador ternario 

const age = 18
const isAdulr = age >= 18 ? true: false

console.log(isAdulr)