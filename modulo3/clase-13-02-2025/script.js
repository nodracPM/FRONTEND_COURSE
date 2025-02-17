
//All this works int he web browser 

function agregarLibros(libros){
    while (true){
        let book = prompt("Introduce el nombre del libro (q para salir)")
    
        if (book.toLowerCase() == "q"){
            break
        }
        else{
            libros.push(book)
        }
    }
}

function mostrarLibros(libros){
    let list = null 

    for (let libro of libros){
        list += ", " + libro 
    }
    document.getElementById("libros").innerText = list
}


libros = []
agregarLibros(libros)
mostrarLibros(libros)

