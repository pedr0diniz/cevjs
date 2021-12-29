class StringAnalyzer {
    constructor(sourceString) {
        this.sourceString = sourceString
    }

    analyze() {
        return (`
            String has whitespaces? ${this.sourceString.indexOf(' ') >= 0}
            String is numeric? ${!isNaN(this.sourceString)}
            String is alphabetic? ${/^[a-zA-Z() ]+$/.test(this.sourceString)}
            String is alphanumeric? ${/^[a-zA-Z0-9() ]+$/.test(this.sourceString)}
            String is uppercase? ${this.sourceString === this.sourceString.toUpperCase()}
            String is lowercase? ${this.sourceString === this.sourceString.toLowerCase()}
        `)
    }
}

const stringAnalyzer = new StringAnalyzer("testing my input")
console.log(stringAnalyzer.analyze())