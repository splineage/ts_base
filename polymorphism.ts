// polymorphism : 다른 모양의 코드를 가질 수 있게 해주는 것 -> 제네릭 사용
// 제네릭은 placeholder 타입을 쓸 수 있도록 해줌.

// localstorage API
interface MyStorage<T>{ 
    [key:string]: T
}

class LocalStorage<T>{
    private storage: MyStorage<T> = {}
    set(key: string, value: T){
        this.storage[key] = value
    }
    remove(key: string){
        delete this.storage[key]
    }
    get(key: string): T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.get("key")
stringsStorage.set("hello","how are u")
const booleanStorage = new LocalStorage<boolean>()
booleanStorage.get("key")
booleanStorage.set("hello",true)
