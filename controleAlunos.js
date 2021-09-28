//CONTROLE DE ALUNOS - José Moreira de Oliveira.

let readlineSync = require('readline-sync');
var i = 0;
var qtdAlunos;

qtdAlunos = readlineSync.question("Informe a quantidade de alunos: ");
console.log(qtdAlunos + " Alunos");

for (i = 0; i <= qtdAlunos; i++)
{   
    
    if (i == 0)
    {
        console.log ("o número " + i + " é par"); 
    }

    else if (i%2 == 0)
    {
        console.log ("o número " + i + " é par");
    }
        
    else
    {
        console.log ("o número " + i + " é ímpar");
    }       
  
}
