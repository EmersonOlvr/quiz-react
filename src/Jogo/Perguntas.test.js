const Perguntas = require("./Perguntas")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "George"], ["Michael", "George", "Michael"], ["Pierre Edouard", "Jean-Philippe", "Edmond"]]
        inst = new Perguntas.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("carregaPerguntas", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "George"], ["Michael", "Pierre Edouard", "Jean-Philippe"], ["Anas", "Anas", "Edmond"]]
        inst = new Perguntas.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.carregaPerguntas("Singapura")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.carregaPerguntas("Somali")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.carregaPerguntas("LaPerm")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.carregaPerguntas("Snowshoe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.carregaPerguntas("Peterbald")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.carregaPerguntas(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("proximaPergunta", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Edmond", "Jean-Philippe"], ["Jean-Philippe", "Jean-Philippe", "Jean-Philippe"], ["Jean-Philippe", "Edmond", "Anas"]]
        inst = new Perguntas.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.proximaPergunta()
        }
    
        expect(callFunction).not.toThrow()
    })
})
