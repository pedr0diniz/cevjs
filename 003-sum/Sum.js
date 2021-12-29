class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return `The sum of ${this.num1} and ${this.num2} = ${this.num1+this.num2}`
    }
}

const calculator = new Calculator(15, 31);
console.log(calculator.sum())