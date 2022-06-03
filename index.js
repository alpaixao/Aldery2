/*
const somosCasados ​​= true
const ano Nascimento = 1980
const mídia = (7+8+9+10) / 4
const nome = "Vanessa"
deixe idade = null
const terceiroFilho //indefinido
const numeroGrande = 1234567845534545345345349n // estamos usando o Bigint
//outra forma de escrita é:
const numeroGrande2 = BigInt("1234567891234567895n")
const meuSimbolo = new Symbol() //usado no ECAMScript. Cada valor do Symbol retornado é único
const meuObjeto = {
  curso: "Estrutura de Dados"
} // esse formato utiliza texto padrão para definir a estrutura de dados
// AULA SOBRE ARRAYS ///
const saldoGabriel = 1000;
const saldoVanessa = 10000;
const total = saldoGabriel + saldoVanessa;
console.log(total)
// seu tem varias contas, posso criar variaveis , porém o correto é sar ARRAYS.  
// no arrays se usa os colchetes para delimitar os elementos que são inseridos dentro dele.
const saldoContas = [100, 200, 40, 1,9, 300, 1000, 9,99];
const total = saldoContas.reduce( (acumulador, valor) => acumulador + valor );
console.log(total);
//arrays multidimensionais, usando diferentes tipos de dados (normalmente não se usa ele, e sim o DICIONÁRIO) - mesmo exemplo acima, só que com diversos bancos
const saldoContas = [["banco 1", 100], ["Banco 2",200], ["Banco 3",40] , ["Banco 4",1.9], ["banco 5", 300], [ "banco 6", 1000], ["banco 7", 9,99]];
const total = saldoContas.reduce( (acumulador, valor) => acumulador + valor );
console.log(total);
//OUTROS EXEMPLOS
// abaixo temos um array principal dentro de um array que contem um array
const bandeiras = [
["brasil", ["verde", "amarelo", "azul", "branco"]],
["canadá", ["vermelho", "branco"]],
["méxico", ["verde", "branco", "verde"]]
["eua", ["azul", "branco", "vermelho"]]
];
console.log (bandeirs[2][1]);
*/

//chamando um array vazio

let  meuArray  =  [ "aldeia" ,  "lima" ,  "paixao" ]
let  meuArray  =  new  Array ( )  // dentro dos pares podemos definir o tamanho fixor de nomes 2 números de posições ou definir os nomes
let  meuArray3  =  new  Array ( "roberta" ,  "tiemi" )

consola . tabela ( meuArray )

consola . tabela ( meuArray2 )

consola . tabela ( meuArray3 )