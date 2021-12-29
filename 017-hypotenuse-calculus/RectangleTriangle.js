class RectangleTriangle {
    constructor(catA, catB) {
        this.catA = catA;
        this.catB = catB;
    }

    calculateHypotenuse() {
        return (this.catA**2 + this.catB**2)**(1/2)
    }
}

const triangle = new RectangleTriangle(3, 4);
console.log(`The hypotenuse of a triangle with catetos valued at ${triangle.catA} and ${triangle.catB} is ${triangle.calculateHypotenuse()}.`)