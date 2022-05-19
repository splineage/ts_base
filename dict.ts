type Words = {
    [key:string]: string
}
// let dick: Words = {
//     "a": "b"
// }

class Word{
    constructor(
        public readonly term: string,
        public readonly def: string
        ){}
}

class Dict{
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word: Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    def(term: string){
        return this.words[term]
   }
    del(key: string){
        if(this.words[key] !== undefined){
            delete this.words[key]
        }
    }
    up(word: Word){
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.def
        }
       this.words[word.term] = word.def       
    }
    static hello(){
        return "hello"
    }
}

const kimchi = new Word("kimchi","kr food")
const pasta = new Word("pasta","i food")

const dict = new Dict()
dict.add(kimchi)
dict.add(pasta)
console.log(dict.def("kimchi"))
dict.del("kimchi")
console.log(dict.def("kimchi"))
dict.up(new Word("kimchi","korea food"))
console.log(dict.def("kimchi"))
console.log(dict.def("pasta"))
Dict.hello()