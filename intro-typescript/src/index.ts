/* let dado: string = "BRuno";

console.log(dado); */

//Decorators 1
/* function apiVersion(version: string){
    return (target : any)=>{
        Object.assign(target.prototype, {__version: version})
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version); */

//Decorators 2 - attribute decorator

function minLength(length:number){
    return (target: any, key: string)=>{
        //console.log(target[key]);
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`)
            }
            else{
                _value = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set:setter,
        })
    }
}

class Api {

    @minLength(10)
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("produt0000os");
console.log(api.name);



/* function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {} */