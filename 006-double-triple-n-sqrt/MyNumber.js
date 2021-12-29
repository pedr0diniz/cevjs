class MyNumber {
    constructor(value) {
        this.value = value;
    }

    double() {
        return this.value*2
    }

    triple() {
        return this.value*3
    }

    root() {
        return this.value**(1/2)
    }
}

const number = new MyNumber(10)
console.log(`My number is ${number.value}`)
console.log(`My number*2 is ${number.double()}`)
console.log(`My number*3 is ${number.triple()}`)
console.log(`The square root of my number is ${number.root()}`)