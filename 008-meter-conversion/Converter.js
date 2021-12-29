class Converter {
    constructor(valueInMeters) {
        this.valueInMeters = valueInMeters
    }

    convertToKm() {
        return this.valueInMeters/1000
    }
    convertToHm() {
        return this.valueInMeters/100
    }
    convertToDam() {
        return this.valueInMeters/10
    }
    convertToDm() {
        return this.valueInMeters*10
    }
    convertToCm() {
        return this.valueInMeters*100
    }
    convertToMm() {
        return this.valueInMeters*1000
    }
}

const size = new Converter(1)
console.log(`Our value in meters is ${size.valueInMeters}m.`)
console.log(`Our value in km is ${size.convertToKm()}km.`)
console.log(`Our value in hm is ${size.convertToHm()}hm.`)
console.log(`Our value in dam is ${size.convertToDam()}dam.`)
console.log(`Our value in dm is ${size.convertToDm()}dm.`)
console.log(`Our value in cm is ${size.convertToCm()}cm.`)
console.log(`Our value in mm is ${size.convertToMm()}mm.`)