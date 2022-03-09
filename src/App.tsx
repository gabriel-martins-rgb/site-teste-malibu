import { useState } from 'react'
import logo from './logo.svg';
import menu from './menu-one.svg';
import './App.css';

function App() {

  function showDropdown(){
    var element = document.getElementById("dropdown");
    element.classList.toggle("show");
    
  }

  return (
    <div className="App">
      <header>
        <span>
          <img src={logo} alt="" />
        </span>
        <button type="submit" onClick={showDropdown}>
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
      </header>

        <main>
            <h1>Ven y descubre la mejor cafetería de Valencia</h1><br />
            <p>Invita a tus amigos y tómate ese café.</p><br />
            <p>Sabor y Calidad nos define.</p>

            <div className="buttons">
              <button type="submit" className="color-button-light">Nuestra ubicación</button>
              
              <button type="submit" className="color-button-dark">Carta</button>
            </div>
        </main>

    </div>
  )
}

export default App
