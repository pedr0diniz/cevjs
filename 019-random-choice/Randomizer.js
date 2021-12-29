class Randomizer {
    constructor() {
        this.students = []
    }

    addStudent(student) {
        this.students.push(student)
    }

    getRandomStudent() {
        return this.students[Math.floor(Math.random()*this.students.length)]
    }
}

const randomizer = new Randomizer();
randomizer.addStudent('Pedro');
randomizer.addStudent('Amanda');
randomizer.addStudent('Anelise');
randomizer.addStudent('John');
console.log(`Out of all students ${randomizer.students}, ${randomizer.getRandomStudent()} was picked randomly.`)
