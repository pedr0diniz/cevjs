class Randomizer {
    constructor() {
        this.students = []
    }

    addStudent(student) {
        this.students.push(student)
    }

    getRandomStudentOrder(array = [], students = this.students) {
        if (array.length == 4) {
            return array;
        }
        var element = this.students[Math.floor(Math.random()*this.students.length)]
        array.push(element);
        students.splice(students.indexOf(element), 1);
        return this.getRandomStudentOrder(array, students);
    }
}

const randomizer = new Randomizer();
randomizer.addStudent('Pedro');
randomizer.addStudent('Amanda');
randomizer.addStudent('Anelise');
randomizer.addStudent('John');
console.log(`Out of all students ${randomizer.students}, the presentation order will be ${randomizer.getRandomStudentOrder()}.`)
