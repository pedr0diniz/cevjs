class PaintCalculator {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width*this.height
    }

    calculateLitersOfPaint() {
        return this.calculateArea()/2
    }
}

const paintCalculator = new PaintCalculator(2.5, 8)
console.log(`To paint a wall of ${paintCalculator.width} by ${paintCalculator.height}, you need ${paintCalculator.calculateLitersOfPaint()} liters of paint.`)