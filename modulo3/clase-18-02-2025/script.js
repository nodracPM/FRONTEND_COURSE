class book{

    constructor(title, author, year, state){
        this.title = title;
        this.author = author;
        this.year = year;
        this.state = state
    }

    describeBook(){
        console.log("Libro títulado " + this.title + " escrito por " + this.author + " en " + this.year + ", su estado es " + this.state)
    }
}


miFirstBook = new book("El principito", "Antoine de Saint-Exupery", 1943, "disponible")
miFirstBook.describeBook()