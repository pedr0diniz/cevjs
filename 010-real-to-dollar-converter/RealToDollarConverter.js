class CurrencyConverter {
    constructor(brlValue) {
        this.brlValue = brlValue
    }

    convertToDollar() {
        return this.brlValue/5.67
    }
}

const converter = new CurrencyConverter(100)
console.log(`My value of R$ ${converter.brlValue}.00 = US$ ${converter.convertToDollar()}`)