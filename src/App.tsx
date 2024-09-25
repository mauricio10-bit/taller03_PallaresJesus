import './App.css'
import Logo from './assets/img/LogoLiverpoolFC.jpg'

function App() {

  return (
    <>
      <h1><b>LIVERPOOL FC</b></h1>
      <div>
        <a href="https://www.liverpoolfc.com/es" target="_blank">
          <img style={{ borderRadius: '100%' }} src={Logo} className="logo" alt="Liverpool FC" />
        </a>
      </div>
      <div className="card">
        <p>
          <b>Es uno de los más importantes equipos del fútbol inglés. Ha ganado 6 Copas de Europa y 18 títulos de liga. Su estadio, con capacidad para 45362 personas, se conoce como Anfield y está situado en el barrio de Everton a unos 5 kilómetros del centro de Liverpool.</b>
        </p>
      </div>
    </>
  )
}

export default App
