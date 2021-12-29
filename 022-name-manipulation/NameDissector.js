class NameDissector {
    constructor(name) {
        this.name = name;
    }

    toUpper() {
        return this.name.toUpperCase();
    }

    toLower() {
        return this.name.toLowerCase();
    }

    countLength() {
        return this.name.split(' ').join('').length;
    }

    countFirstName() {
        return this.name.split(' ')[0].length;
    }
}

const nameDissector = new NameDissector("Pedro Gurgel Diniz Neto");
console.log(`The name is ${nameDissector.name}`)
console.log(`The name in uppercase is ${nameDissector.toUpper()}`)
console.log(`The name in lowercase is ${nameDissector.toLower()}`)
console.log(`The length of the name is ${nameDissector.countLength()}`)
console.log(`The length of the first name is ${nameDissector.countFirstName()}`)