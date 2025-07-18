//prototype is special property in a object.

const student = {
    fullName: "Jayant",
    marks: 100,
    printMarks: function () {
        console.log("marks=", this.marks)
    },

}

const employee = {

    calcTax1() {
        console.log("Tax Rate is 10%");
    },


};

const karanArjun = {
    salary: 50000,

};

karanArjun.__proto__ = employee;

//Class is a program code template for creating classes.
//Those objects will have some state (variables) & some behaviour(functions) inside it.


class ToyotaCar {

    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }

    setSeats(seat) {
        this.seat = seat;
    }

    constructor(brand, mileage) {
        console.log("creating new obj");
        this.brand = brand;
        this.mileage = mileage;
    }

}

let fortuner = new ToyotaCar("FortunerWhite", 10);
fortuner.setSeats("6 Seater");
let lexus = new ToyotaCar("LexusBlack", 12);
lexus.setSeats('4 seater');


//Inheritance is passing down of property from parents's class to child class.

class Parents {
    hello() {
        console.log('hello')
    }
}

class Child extends Parents {

}

let obj = new Child();

class Person {

    constructor() {
        this.species = "homo sapiens"
    }


    eat() {
        console.log("eating")
    }
    sleep() {
        console.log("sleep")
    }

    work() {
        console.log("Mehnat karo")
    }
}

class Engineer extends Person {

    constructor(branch) {
        super(); //invoke Person (parent class's constructor)
        this.branch = branch;
    }

    work() {
        console.log("solve problems,build something");
    }

}

class Doctor extends Person {
    work() {
        console.log("treat patients")
    }
}

let jrjeng = new Engineer();
let jrjdoc = new Doctor();
let p1 = new Person();
let engobj = new Engineer("Computer Engineer")

let Data = "website's  ka data"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", Data);
    }
}

let visitor1 = new User("jayant", "abc@email.com");
let visitor2 = new User("Raju", "raju@123gmail.com");

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        Data = "Some new value"
    }
}

let admin1 = new Admin("Baburao", "babaraoadmin@gamil.com");


let a = 5
let b = 10
console.log("a: ", a)
console.log("b :", b)
try {
    console.log(c) // 
} catch (error) {
    console.log("error c not defined")
    console.log(error)

}
