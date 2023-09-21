function mediaAluno(){
    var nome = window.prompt('qual o nome do aluno ?');
       nota1 = window.prompt('qual a nota 1 ?');
       nota2 = window.prompt('qual a nota 2 ?');
       nota3 = window.prompt('qual a nota 3 ?');
       var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3;
       document.getElementById('nome').innerHTML= nome;
       document.getElementById('notas').innerHTML= nota1 + nota2 + nota3;
       document.getElementById('media').innerHTML= media;
      
       if(media>=6){ document.getElementById('mensagem').innerHTML= "parabens <3";
   
       }else{ document.getElementById('mensagem').innerHTML= "deu ruim ";
           
       }
    }