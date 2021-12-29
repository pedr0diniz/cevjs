class TimesTable {
    constructor(number) {
        this.number = number;
    }

    generate() {
        return (`
        My number (number * 1) is ${this.number}.
        Number * 2 = ${this.number*2}
        Number * 3 = ${this.number*3}
        Number * 4 = ${this.number*4}
        Number * 5 = ${this.number*5}
        Number * 6 = ${this.number*6}
        Number * 7 = ${this.number*7}
        Number * 8 = ${this.number*8}
        Number * 9 = ${this.number*9}
        Number * 10 = ${this.number*10}
        `)
    }

}

const timesTable = new TimesTable(5)
console.log(timesTable.generate())