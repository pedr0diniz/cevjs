class SalaryRaise {
    constructor(baseSalary, raisePercent) {
        this.baseSalary = baseSalary;
        this.raisePercent = raisePercent;
    }

    calculate() {
        return this.baseSalary*(1+this.raisePercent/100);
    }
}

const raise = new SalaryRaise(1000, 15);
console.log(`A R$ ${raise.baseSalary}.00 salary with a ${raise.raisePercent}% raise becomes a R$ ${raise.calculate()}.00 salary.`)