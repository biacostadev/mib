
window.onload = initPage;

function initPage() {
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


const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const mensagem = document.getElementById('mensagem')



const buttonCodificar = document.getElementById("anexar");
buttonCodificar.addEventListener("click", anexar);
function anexar() {
    console.log('foi')
    console.log(nome.value)
    window.open('mailto:vendas@mib.ind.br')
}