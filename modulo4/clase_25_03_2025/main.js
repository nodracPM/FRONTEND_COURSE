
class Viaje {
    constructor(nombre, origen, destino, duracion, pais) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.duracion = Number(duracion);
        this.pais = pais;
        this.tareas = [];
    }

    agregarTarea(tarea) {
        if(this.tareas.includes(tareas)) {
            console.log("Task is already in the list");
            return; 
        }
        this.tareas.push(tarea); 
        console.log("Task added"); 
        
    }

    eliminarTarea(tarea) {
        const index = this.tareas.indexOf();
        if(index == -1) {
            console.log("Task not found"); 
            return; 
        }
        this.tareas.splice(index, 1); 
        console.log("Task removed"); 
    }

    mostrarResumen() {
        const {nombre, destino, duracion, pais, tareas} = this; 
        console.log(`Viaje: ${nombre} \n Destino: ${destino} \n Duración: ${duracion} \n País: ${pais} \n Tareas: ${tareas}`);

        
    }
}