class LinkedNode {
    constructor(number) {
        this.number = number;
    }

    previous() {
        return this.number - 1
    }

    next() {
        return this.number + 1
    }
}

const node = new LinkedNode(5)
console.log(`My number is ${node.number}`)
console.log(`The previous number is ${node.previous()}`)
console.log(`The next number is ${node.next()}`)
