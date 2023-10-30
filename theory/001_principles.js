// // CREATING OBJECTS

// // CREATING LITERAL OBJECTS
// // A OBJECT IS A KEY:VALUE PAIR
// // console.log( {} )

// const showFullName = () => {
//     return "Ryan Ray";
// }

// let name = "Ryan"
// let lastName = "Ray"
// let age = 30

// let user = {
//     name: "Juan", 
//     lastName: "Cortez",
//     age: 30,
//     hobbies: ['read', 'coding', 'run'],
//     addres: {
//         street: "Some street",
//         city: "London"
//     },
//     showFullName() {
//         return this.name + " " + this.lastName;
//     }
// }

// // console.log(user.showFullName());

// const account = {
//     number: 111111,
//     amount: 100,
//     depositar(quantity) {
//         this.amount += quantity;
//         return this.amount
//     },
//     retirar(quantity){
//         this.amount -= quantity;
//         return this.amount;
//     }
// }

// // account.depositar(100);
// // account.retirar(20);
// // console.log(account.amount);


// // CONSTRUCTORS
// function Person() {
//     this.name = ""
//     this.lastName = ""
//     this.age = 0
//     this.showFullName = function () {
//         return `${this.name} ${this.lastName}`
//     }
// }

// const user3 = new Person();
// user3.name = "Joe"
// user3.lastName = "McMillan"
// user3.age = 30

// // console.log(user3.showFullName());

// const person = new Object()
// console.log(person)


// function Person() {
//     this.name = ""
//     this.lastName = ""
// }

// const person = new Person();
// console.log(person)


// function Person(name, lastName){
//     this.name = name
//     this.lastName = lastName
//     this.display = function () {
//         return `${this.name} ${this.lastName}` 
//     }
// }

// const user = new Person("John", "MacMillan")
// user.name = "Juan"
// console.log(user.display())

// Person.prototype.greet = function() {
//     return `hello I am ${this.name}`
// }

// Person.prototype.age = 40

// console.log(user.greet())

// const user2 = new Person("Felipe", "Cortez")
// console.log(user2.greet())
// console.log(user2.age)

// function Person() {
//     this.name = ""
//     this.lastName = ""
// }

// const company = {
//     name: "fazt tech",
//     employees: []
// }

// class Person {
    
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }
// }

// const user1 = new Person("Felipe", "Cortez")
// const user2 = new Person("Juan", "Cortez")

// user2.parent = user1

// console.log(user1)
// console.log(user2)

// company.employees.push(user1)
// company.employees.push(user2)

// console.log(company)

// const person = {
//     name: "Ryan",
//     lastName: "ray",
//     address: {
//         street: "123 baker street",
//         city: "london",
//         country: "UK"
//     }
// }

// const company = {
//     name: "fazt tech",
//     employees: [],
//     sortEmployees: function () {}
// }

// company.sortEmployees = "djksjkdsjdsk"


// function Person() {
//     this.name = ""
//     this.lastName = ""
// }

// function Programmer() {
//     this.language = ""
// }

// Programmer.prototype = new Person()

// const user = new Programmer();
// console.log(user)

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Programmer extends Person {
    constructor (firstName, lastName, language) {
        super(firstName, lastName);
        this.language = language;
    }
}

const user = new Person("Juan", "Cortez")
const programmer = new Programmer("Felipe", "Cortez", "Python")

console.log(programmer)