


function initPage() {
  console.log("iniciou")
  const numeroTorres = document.getElementById('numeroTorres');
  const numeroApartamentos = document.getElementById('numeroApartamentos');
  const min = 1;
  const maxTorres = 470;
  const maxApartamentos = 23834;
  const timeTorres = 2500;
  const timeApartamentos = 3500;

  for (let i = min; i <= maxTorres; i++) {
    setTimeout(function (nr) {
      numeroTorres.innerHTML = nr;
    }, i * timeTorres / maxTorres, i);
  }

  for (let i = min; i <= maxApartamentos; i++) {
    setTimeout(function (nr) {
      numeroApartamentos.innerHTML = nr;
    }, i * timeApartamentos / maxApartamentos, i);
  }
}

window.onload = initPage();

/* Máscaras ER */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeypress = function(){
  mascara( this, mtel );
}
}




const buttonCodificar = document.getElementById("anexar");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
buttonCodificar.addEventListener("click", anexar);

function anexar() {
  if(nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == ''){
    alert('Por favor, preencha todos os campos do formulário.');      
        return false;
  } else {
    console.log('foi')
  window.open('mailto:vendas@mib.ind.br?subject=Contato site MIB&body=Nome: ' + nome.value + '%0DTelefone: ' + telefone.value + '%0DEmail: ' + email.value +  '%0DMensagem: '  + mensagem.value)
  }


  
}