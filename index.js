/pegando hora 
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

