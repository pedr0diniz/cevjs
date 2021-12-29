class Trigonometry {
    constructor(angle) {
        this.angle = angle;
    }

    angleInRadians() {
        return this.angle * (Math.PI / 180);
    }

    getSin() {
        return Math.sin(this.angleInRadians())
    }
    getCos() {
        return Math.cos(this.angleInRadians())
    }
    getTan() {
        return Math.tan(this.angleInRadians ())
    }

}

const angle = new Trigonometry(45);
console.log(`Our angle is ${angle.angle}º.`)
console.log(`Its sine is ${angle.getSin()}.`)
console.log(`Its cossine is ${angle.getCos()}.`)
console.log(`Its tangent is ${angle.getTan()}.`)