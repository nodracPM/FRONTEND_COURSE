class car{
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color 
    }

    acelerate(){
        console.log("Ruunnnnnn")
    }
}

class travel {
    constructor(from, to, price) {
        this.from = from
        this.to = to
        this.price = price
    }
}

class usuario{
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age 
        this.tickets = []
    }

    getName(){
        return this.name
    }

    getLastName(){
        return this.lastName
    }

    getAge(){
        return this.age
    }

    setName(name) {
        this.name = name
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

    setAge(age) {
        this.age = age
    }

    buyTicketTravel(){
        console.log("Ticket bought")
    }

    cancelTicketTravel(){
        console.log("Ticket canceled")
    }

    addTicketTravel(travel){
        this.tickets.push(travel)
    }
}



car1 = new car("Ferrari", 2005, "Red")
car2 = new car("BMW", 2023, "Blue")


car1.acelerate()
