document.getElementById("agregar_comentario_button").addEventListener("click", function(){
    new_comment = document.getElementById("comentario_input").value
    document.getElementById("comentarios").innerHTML += "<li>" + new_comment + "</li>"
})
