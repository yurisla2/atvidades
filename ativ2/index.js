function calcularIdade(){
    ano = window.prompt('em que ano vc nasceu ');
    idade = 2023 - ano;
   document.getElementById('mensagem').innerHTML="quem nasceu  em  " + ano +" vai completar " + idade + " em 2023";
}
