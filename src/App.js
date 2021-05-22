import logo from './img/logo.png';
import obra from './img/obra.jpeg';
import instalador from './img/instalador.jpg';
import kits from './img/kits.png'
import flex from './img/flex.png'
import steel from './img/steel.png'
import instagram from './img/instagram.svg'
import linkedin from './img/linkedin.svg'
import youtube from './img/logo-do-youtube.svg'
import whatsapp from './img/whatsapp.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <a
            className="App-nav-link"
            href="#home"
          >
            Home
        </a>
          <a
            className="App-nav-link"
            href="#obras"
          >
            Obras
        </a>
          <a
            className="App-nav-link"
            href="#portifolio"
          >
            Portifólio
        </a>
          <a
            className="App-nav-link"
            href="#contato"
          >
            Contato
        </a>
        </nav>
      </header>
      <section className="App-title" id="home">
        <p className="App-title-help">Ajudando a <b>construir</b> cidades</p>
        <p className="App-title-count">(contador)</p>
      </section>
      <section className="App-obras" id="obras">
        <h2 className="App-obras-title">Obras</h2>
        <div className="App-obras-div">
          <img src={obra} className="App-obras-div-obra" alt="obra" />
          <img src={obra} className="App-obras-div-obra" alt="obra" />
          <img src={obra} className="App-obras-div-obra" alt="obra" />
        </div>
      </section>
      <section className="App-portifolio" id="portifolio">
        <h2 className="App-portifolio-title">Portifólio</h2>
        <div className="App-portifolio-div">
          <img src={kits} className="App-portifolio-div-info" alt="obra" />
          <img src={flex} className="App-portifolio-div-info" alt="obra" />
          <img src={steel} className="App-portifolio-div-info" alt="obra" />
        </div>
      </section>
      <section className="App-parceiro" id="parceiro">
        <h2 className="App-parceiro-title">Nosso maior parceiro é você!</h2>
        <div className="App-parceiro-div">
          <img src={instalador} className="App-parceiro-div-instalador" alt="instalador" />
        </div>
      </section>
      <section className="App-contato" id="contato">
        <h2 className="App-contato-title">Contato</h2>
        <div className="App-contato-div">
          <input className="App-contato-div-input" placeholder="Nome"></input>
          <input className="App-contato-div-input" placeholder="Telefone"></input>
          <input className="App-contato-div-input" placeholder="E-mail"></input>
          <input type="file" accept="application/pdf" className="App-contato-div-input" />
          <textarea className="App-contato-div-textarea" placeholder="Digite sua mensagem aqui"></textarea>
          <button className="App-contato-div-button">Enviar</button>
        </div>
      </section>
      <section className="App-whatsapp">
      <img src={whatsapp} className="App-whatsapp-logo" alt="whatsapp" />
      </section>
      <footer className="App-footer">
        <img src={logo} className="App-footer-logo" alt="logo" />
        <div className="App-footer-contato">
          <p className="App-footer-title">Contatos</p>
          <p>(xx) xxxxx-xxxx</p>
          <p>(xx) xxxxx-xxxx</p>
        </div>
        <div className="App-footer-redes">
          <p className="App-footer-title">Redes Sociais</p>
          <div className="App-footer-redes-logos">
          <img src={instagram} className="App-footer-logo-redes" alt="instagram" />
          <img src={linkedin} className="App-footer-logo-redes" alt="linkedin" />
          <img src={youtube} className="App-footer-logo-redes" alt="youtube" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
