/*
var: se puede reasignar y redeclarar en cualquier parte del código. 
let: se puede reasignar pero no se puede redeclarar en el mismo ámbito (proyecto). 
const: no se puede reasignar ni redeclarar 
*/

/* Operadores lógicos 


Jerarquía de operadores lógicos
1. NOT (!)
2. AND (&&)
3. OR (||)

Nota: siempre se evalua lo que esté entre paréntesis primero 
*/

/* Estructuras de control if 


*/

function random(min,max) {
    return Math.floor((Math.random())*(max-min+1))+min;
}

let note_number = random(0,100)
let final_note

if(note_number >=90) {
    final_note = "Excelente"
}
else if(note_number >= 75 && note_number < 90) {
    final_note = "Bien"
}
else if(note_number >= 60 && note_number < 75) {
    final_note = "Suficiente"
}
else {
    final_note = "Insuficiente"
}

console.log(final_note)