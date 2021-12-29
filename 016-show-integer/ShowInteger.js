class MyNumber {
    constructor(value) {
        this.value = value;
    }

    getIntegerPart() {
        return parseInt(this.value);
    }
}

const floatNum = new MyNumber(121.453)
console.log(`The integer part of ${floatNum.value} is ${floatNum.getIntegerPart()}.`)