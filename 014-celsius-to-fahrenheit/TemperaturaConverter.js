class TemperatureConverter {
    constructor(temperature, scale) {
        this.temperature = temperature;
        this.scale = scale;
    }

    convertToCelsius() {
        return (this.temperature - 32) * 5/9 
    }

    convertToFahrenheit() {
        return this.temperature * 9/5 + 32
    }
}

const celsiusTemp = new TemperatureConverter(25, 'celsius')
console.log(`${celsiusTemp.temperature} ºC converts to ${celsiusTemp.convertToFahrenheit()}ºF.`)
const fahrenheitTemp = new TemperatureConverter(77, 'fahrenheit')
console.log(`${fahrenheitTemp.temperature} ºF converts to ${fahrenheitTemp.convertToCelsius()}ºC.`)
