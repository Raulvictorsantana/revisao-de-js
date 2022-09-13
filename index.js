/*//pegando hora 
agora = new Date()
var horas= agora.getHours()
var hora =  agora.getMinutes()

console.log (`agora sao ${horas} horas e ${hora} minutos`)

if(horas<12 ){
    console.log ("bom dia ")
}
else if (horas<18){
    console.log ('boa tarde')
    
}
else{
    console.log('boa noite')
}
  
var agora = new Date()
var data =  agora.getDate()
console.log (`hoje é dia ${data}`);

//switch 
var foo = 0;
switch (foo) {
    case -1:
        console.log('1 negativo');
        break;
    case 0: 
        console.log(0)
        
    case 1: 
        console.log(1);
        break; 
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}

 //map com numeros, multiplicando por 2
var arr = [1,2,3,4,5,6];
function neww (numeros){
    numeros.map(numero * 2 ); 
 }
   //map com string, add toUpperCase
   var array = ['raul', 'ana', 'paulo'];

    var receber= array.map(function(_ola){ 
      return _ola.toUpperCase();

    })
    console.log(receber);

//filtando e multiplicando com filter e map
  var oo = [2,4,5,10];
  var oi= oo.filter(_cha=> _cha % 2===0).map(_b=> _b*3);
  console.log(oi);


 //criando um objeto
  var extra = { 
    nome: 'raul',
    idade: 22,
    sexo: 'm',
    nacionalidade: 'brasileiro'
  }
  console.log(extra)


  var informaçao = {
    nome:{
      trabalho: 'pintor',
      escola: 'estacio'
    }
  };
  
  var conso ={
      ...informaçao,
      ...extra
  }
  //objeto 
  var o = Object.assign({}, conso,informaçao);
  console.log(o)
   
 console.log(informaçao.trabalho);
 var {nome:{trabalho}}=informaçao;
 console.log(trabalho);


 //this
   function pers(p1, p2){
    console.log(p1,p2)
    console.log('pers',this)
  }
  var pe={
    nome: 'raul'
  }
  pers.call(pe,'ola', 222)

  
 function mostrar(nome){
   return function(){
 console.log (nome);
   }
 }

 //mostra alguma coisa apos x tempo

  function começo(){
    let nome = 'raul';
    setTimeout (mostrar(nome),1000) 
  }
  começo();

  //soma simples 
  function soma (a,b){
    return a+b;
  };
  console.log (soma ( 20,20))


  *localStorage.setItem('nome', 'raul');
  var mostrar = localStorage.getItem('nome');
  document.write(mostrar);

   turno = chechar_turno ? jogador_x:jogador_o; //OPERADOR TERNARIO//
 
  let number ="123456789";
   console.log(number.tofixed(2));//ARMAZENAR NUMERO COM PRECISÃO DE 2 CASAS DECIMAIS//

   match* //
   let texto = "retorna um array que armazena todos os resultados correspondentes.";
   console.log(texto.match(armazena)); 
   

  //Callbacks
const depois = require('fs')

  const chamarDepois =(err ,contns)=>{  
     console.log( err, String(contns) )

  }  
   
   depois.readFile('./p1.txt', chamarDepois)

   console.log(2)
   console.log(3)
  
 function usuario(id){
   return fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
  .then((data)=>data.json())
  .catch((err)=>console.log(err))
 }
 async function mostra(id){
  const user= await  usuario(id)
  console.log(`O nome do usuario é ${user}`)
 }
 
 mostra(1)

 const novo = id =>{
  fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
 .then((response)=>response.json())

  .catch(data=>{
    console.log (data)
  })
  .catch(erro=>{
    console.log( "Deu errado") 
  })
 }
 novo (3)
 
//ttt
const depois = require('fs')

  const chamarDepois =(err ,contns)=>{  
     console.log( err, String(contns) )

  }  
   
   depois.readFile('./p1.txt', chamarDepois)

   console.log(2)
   console.log(3)

const depois = require('fs')

     const agora =(err,contns)=>{
      console.log(String(contns))
    }
   depois.readFile('./p1.txt',agora)
    console.log(2)
    console.log(3)
//quando da certo
 .then(passou)

 .catch(data=>{
  console.log (data)
  //quando da errado
})




 function api(){
  
 fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))


}
api()*/ 

//consferida  mais uma vez alguns metodos de manipulação de array
let foARRAY = [10,20,30,5,8,10,60]

foARRAY.forEach(function(ele, indi,){
 // console.log('elemento',ele,'indice', indi,"/", foARRAY.toString() )

})
 //console.log (foARRAY.indexOf(5))



  var ult = foARRAY.unshift('55 ')
 //  console.log(foARRAY)

 

 var pime = foARRAY.pop (1,3)

// console.log(pime)

 //console.log(foARRAY)

 var o = foARRAY.shift()
 //console.log(o)
 //console.log(foARRAY)

 
 //console.log(foARRAY.slice( 1,2))


 




      

    