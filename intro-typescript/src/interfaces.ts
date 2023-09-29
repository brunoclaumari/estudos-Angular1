//Interfaces
type robot = {
    id:string | number;
    name:string;
}

//Mais utilizado para trabalhar com classes. Usar mais esse jeito de criar objetos.
interface robot2 {
    id:string | number;
    name:string;
    sayHello():string;
}

const bot:robot2 = {
    id: 1,
    name: "optimus prime",
    sayHello: function (): string {
        return "Hello bot";
    }
}

class Pessoa implements robot2{
    
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string){
        this.id = id,
        this.name = name;
    }
    sayHello(): string {
        return `Hello, I am ${this.name}!`;
    }
}

const p = new Pessoa(1, "Gustavson")
//console.log(p.sayHello());

//Classes

class Character {
    name:string;
    stregth:number;
    skill:number;

    constructor(name:string, stregth: number, skill:number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack():void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

/* const c = new Character("Ryu", 10, 98);
c.attack(); */


class Magician extends Character{
    magicPoints: number;

    constructor(name:string, stregth: number, skill:number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

/* const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100); */

//generics
function concatArray<T>(...items: T[]): T[]{
    return new Array().concat(...items);
}

const numArray = concatArray<number[]>([1,8,6],[6,5]);
const strArray = concatArray<string[]>(["felipe", "goku"],["Vegeta"]);

//numArray.push("ola");

console.log(numArray);
console.log(strArray);

/*
//Data modifiers
public - pode ser acessado por dentro e por fora da classe a qual pertence
private - pode ser acessado apenas por dentro da classe a qual pertence
protected - pode ser acessado por dentro da classe a qual pertence ou de qualquer subclasse da mesma.

*/

