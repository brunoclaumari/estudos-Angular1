"use strict"
/*
Variáveis
*/

//tipos primitivos: boolean, number, string
let ligado:boolean = false;
let texto:string = "Bruno";
let num1 : number = 30;
let num2 : number = 1.90;

//tipos especiais (null e undefined)
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abrangentes (void, any [any não recomendado usar excessivamente, só casos especiais])
let vazio:void;
let retornoAny:any = false || "haha";//aceita qualquer coisa, igual javascript puro

//Objeto - sem previsibilidade
let produto: object = {
    name:"felipe",
    cidade:"sp",
    idade:30,
}

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number,
}

let meuProduto :ProdutoLoja = {
    nome:"Tênis",
    preco:89.99,
    unidades: 5,
};

/*
Arrays
*/ 
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

//vetor de 2  tipos diferentes >> não recomendado, pois o typescript é justamente para tipar os dados corretamente
let infos:(string | number)[] = ["felipe", 32];

/**
 * Tuplas
 */

let boleto:[string, number, number] = ["agua conta", 199.90, 326535456];// pode ser usada para obter tabelas de banco de dados

/**
 * Arrays - métodos
 */
//tem os mesmos métodos usados no Javascript

/**
 * Datas - Date 
 */
let aniversario:Date = new Date("2022-12-01 05:00");
//console.log(aniversario.toString());

/**
 * Funções
 */
function addNumber(x:number , y:number):number{
    return x + y;
}

//console.log(addNumber(5, 6));

//Funções assíncronas - O retorno tem que ser uma Promise de algum tipo de dados, objeto, etc
async function getDatabase(id:number):Promise<string> {
    return "Bruno";
}




/* type Heroi = {
    name:string;
    vulgo:string;
}

function imprimeHeroi(heroi: Heroi){
   return console.log(heroi); 
}

imprimeHeroi({
    name:"Brune wayne",
    vulgo:"batman"
}
); */


