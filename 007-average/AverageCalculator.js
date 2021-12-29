class AverageCalculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate() {
        return ((this.num1+this.num2)/2)
    }
}

const calculator = new AverageCalculator(10, 100)
console.log(`The average between ${calculator.num1} and ${calculator.num2} is ${calculator.calculate()}`)