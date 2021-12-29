class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        return `Welcome, ${this.name}!`
    }
}

const zinid = new Person("ziniD")
console.log(zinid.greet())