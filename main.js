function Retornar(){ 
    alert("Retorne algo!!!");       
}
function RetornaNome(){
    var nome = document.getElementById("nome").value;
    console.log(nome);
}
function RetornaNoHTML(){
    document.write("Teste");
}
function CarregaDados(){
    var url = "http://localhost:3000/posts";
    $.get(url,function(data){
        console.log(data);
    })
}

function RetornaNoElemento(){
    var nome = document.getElementById("nome").value;
    console.log(nome);
    document.getElementById("texto").innerHTML += nome;    
    document.getElementById("texto1").innerHTML += nome;    
}

var i=0;
setInterval(function(){
    console.log(i++);
},1000);


/*
'2'==2; V   //VERIFICA SE O VALOR É IGUAL
'2'===2; F  //VERIFICA SE O VALOR E O TIPO É IGUAL
'2'!== 2; V  /O valor é igual mais o tipo é diferente
'2'== 2
*/



/*
var x = 0;
setTimeout(function(){
    console.log(x++);
},5000);
*/

/**
 *  ==, !=, ===(exatamente), !== (não exatamente)
 */


 


