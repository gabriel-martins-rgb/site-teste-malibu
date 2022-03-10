import logo from './logo.svg';
import menu from './menu.png';
import './App.css';
import ImgLanguage from './Espanha.svg';

function App() {

  function showDropdown(){document.getElementById("dropdown")!.classList.toggle("show"); }

  return (
    <div className="App">

        <div className="container">
      <header>
        <span>
          <img src={logo} alt="" />
        </span>
        <button id="buttonMenu" type="submit" onClick={showDropdown}>
          <img src={menu} alt="" />
        </button>
        <ul  id='dropdown'>
          <li>
            <a href="#">Comienzo</a>
          </li>
          <li>
            <a href="#">¿Quienes somos?</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className="idioma">
          <span>Idioma</span>
          <img src={ImgLanguage} alt="" />
        </div>
      </header>

        <main>
            <h1>Ven y descubre la mejor cafetería de Valência</h1><br />
            <p>Invita a tus amigos y tómate ese café.</p><br />
            <p>Sabor y Calidad nos define.</p>

            <div className="buttons">
              <button type="submit" className="color-button-light">Menú</button>
              
              <button type="submit" className="color-button-dark">Galería</button>
            </div>
        </main>

        <article>
          <div className="redes-sociale">
            
            <div className="buttons-sociale">
            <p>Rede Sociale</p>
                <button type="submit" className="color-button-instagram">Instagram</button>
                
                <button type="submit" className="color-button-facebook">facebook</button>
              </div>
            </div>

            <div className="info-footer">
                <p className="info-location"><br/><br/>
                    Zumeria Malíbu Cullera
                    C/ Madrid esq. C/ Algemesí | Cullera (Valencia)<br/><br/>

                    
                    Teléfono - 
                    961 810 185<br/><br/>

                
                    Móvil -
                    671 701 519<br/> <br/> 

                    
                    Correo electrónico -
                    info@zumeriamalibu.com
                  </p>

                  <p className="info-location"><br/><br/>
                    <ul>
                      <li>Horário de apertura</li><br/>
                      <li>lunes	         -      <span style={{color:'red'}}>Cerrado</span></li><br/>
                      <li>martes	       -      <span style={{color:'red'}}>Cerrado</span></li><br/>
                      <li>miércoles      -      <span style={{color:'red'}}>Cerrado</span></li><br/>
                      <li>jueves         -     <span style={{color:'red'}}>Cerrado</span></li><br/>
                      <li>viernes        -  12:00 – 16:00 <br/> 
                                           19:00 – 01:30</li><br/>
                      <li>sábado   	     -  12:00 – 16:00<br/>
                                           19:00 – 01:30</li><br/>
                      <li>domingo        -  12:00 – 16:00</li><br/>
                    </ul>
                  </p>
            </div>
        </article>
        </div>
    </div>
  )
}

export default App
