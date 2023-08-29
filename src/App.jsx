import { useState } from 'react'
import './App.css'


export const Header= () => {


  return (
    <>
    <div  className='grid-container'>


  
      <header className = 'header-grid'>

        <section className='header-flex'>

          <div className ='logo-header'>
            Logo Ventoverso
          </div>

          <div>
            <input type="text" className='filter' placeholder='Buscar'/>
            <button><img src="/images/lupa.png" alt="filter" /></button>
          </div>


          <div>
            icono
            icono
            icono
          </div>

        </section>

        <section >
          <ul className='categories-flex'>
            <li>Bronces</li>
            <li>Maderas</li>
            <li>Herramientas</li>
            <li>Accesorios</li>
            <li>Ofertas</li>
            <li>Ayuda</li>
          </ul>
        </section>


      </header>
      </div>
    </>
  )

}








