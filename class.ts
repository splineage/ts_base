// default public
abstract class User{ // abstract class 는 인스턴스 생성 불가.
    constructor(
            private firstName: string,
            private lastName: string,
            protected nickName: string // 상속받는 class 만 사용 가능.
        ){}
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    abstract getNickName(): void
}
    
class absPlayer extends User{
    getNickName(){ // 상속받는 class 에서 함수 구현.
        console.log(this.nickName)
    }
}
    
const kimm = new absPlayer("js","kim","maru")
console.log(kimm.getFullName())
kimm.getNickName()


class PlayerClass{
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ){}
}

const nic = new PlayerClass("nico", "las", "ni")
// nico.firstName -> private 접근 제어