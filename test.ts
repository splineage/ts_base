type Player = {
    readonly name: string,
    age?: number
}

const nico = {
    nickname: "nick",
    fun: function(){
        console.log("hello");
    }
}

nico.fun();

function divide(a:number,b:number):number{
    return a/b;
}

console.log(divide(1,2));

const player = {
    age: 12,

}
player.age = 20;
console.log(player.age);

let a = "hello";
let c: number[] = [1,2,3,];
const d = {
    name: "nico",
    fun: function(a:number):number{return 1}
}
d.name

const lynn: Player = {
    name: "nico"
}
const kim: Player = {
    name: "kim",
    age: 12
}

function playerMaker(name: string, age?: number): Player{
    return {
        name
    }
}

const ni: Player = playerMaker("nico")
console.log(ni)
ni.age = 12;
console.log(ni)
const playerMaker_fun = (name:string): Player => ({name})

// Tuple
// readonly
const ar: readonly [string, number, boolean] = ["nico", 12, false]

// any: typescript 비활성화

// unknown, 타입을 미리 알지 못할때 사용
let aa: unknown;
if(typeof aa === 'number'){
    let b = a + 1
}
if(typeof aa === 'string'){
    let b = a.toUpperCase()
}

// void : no retun value
// never : return 하지 않고 오류를 발생시키는 함수?
function hello(): never{
    throw new Error("xxx")
}
function hi(name: string|number){
    if(typeof name === 'string'){

    }else if(typeof name === 'number'){

    }else{
        // never

    }
}

// call signatures : arguments type, return type
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b

const add_arrow = (a: number, b: number): number => a + b

// overloading: multiple call signatures
type Plus = {
    (a: number, b: number) : number
    (a: number, b: string): number
}

const plus: Plus = (a,b) =>{
    if(typeof b === 'string') return a
    return a + b
}

type Config = {
    path: string,
    state: object
}
type Push = {
    (path: string): void
    (config: Config): void
}
const push: Push = (config) => {
    if(typeof config === 'string'){console.log(config)}
    else{
        console.log(config.path)
    }
}

type Sum = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}
const sum: Sum = (a,b,c?: number) =>{
    if(c) return a + b + c
    return a + b
}

// polymorphism : 다양성
// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void    
// }
// generic 
type SuperPrint = {
    <T>(arr: T[]): void
}
const superPrint: SuperPrint = (arr) =>{
    arr.forEach(i => console.log(i))
}
superPrint([1,2,3,4])
superPrint([true,false,true])
superPrint(['a','b','c'])
superPrint([1,2,true,false])

type ReturnFirst = {
    <T>(arr: T[]): T
}
const returnFirst: ReturnFirst = (arr) => arr[0]
const nu: number = returnFirst([1,2,3,4])
const bo: boolean = returnFirst<boolean>([true, false, true, false])
const st: string = returnFirst(['a','b','c'])
const an = returnFirst([1,2,true,false,"hello"])

function sPrint<T>(a: T[]): T{
    return a[0]
}
type Pla<E> = {
    name: string
    extraInfo: E
}
type Extra = {
    favFood: string
}
type Nextra = Pla<Extra>

const p: Nextra = {
    name: "ni",
    extraInfo : {
        favFood: "kim"
    }
}

type A = Array<number>
let aaa: A = [1,2,3,4]
function printAllNumbers(arr: Array<number>){
    
}














