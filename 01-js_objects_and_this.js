// Class code examples


// This is a function that will be attached to the GLOBAL Object
// tehrefore the "this" keyword will pint to the global object
function sayHelloFloating(person){
    console.log("this object of a floating fuction", this)
    console.log("this.firstName", this.firstName)
}

sayHelloFloating()

const person1 = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello: function sayHello(){
        console.log(this.firstName)
    }
}

// This fucniton is attached to a "person1" object
// and therefore the "this" keyword will refer to the person1
person1.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){ // is the same as sayHello: function sayHello(){
        console.log(`Buen día, soy ${this.firstName}. I am ${this.age} years old`)
    }
}

person2.sayHello()

const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.name}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}

console.log("abstractPerson", abstractPerson.tellAge())

console.log(abstractPerson.tellAge.bind(person1)())