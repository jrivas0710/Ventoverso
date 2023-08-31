import { useState } from 'react'
import './Header.css'
import { SeccionPopulares } from './SeccionPopular.jsx'
import { Destacados } from './ProductosDestacados.jsx'


export const Header = () => {


  return (
    <>
      <div className='grid-container'>



        <header className='header-grid'>

          <section className='header-flex'>

            <div className='logo-header'>
              Logo Ventoverso
            </div>

            <div>
              <input type="text" className='filter' placeholder='Buscar' />
              <button className='filter-button '><img src="/images/lupa.png" alt="filter" className='filter-icon' /></button>
            </div>


            <div className='icons'>
              <a href="#">
                <img src="/images/like.png" alt="like" className='like' />
              </a>
              <a href="#">
                <img src="/images/user.png" alt="user" className='user' />
              </a>
              <a href="#">
                <img src="/images/carrito.png" alt="carrito" className='carrito' />
              </a>




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

        <Destacados/>
        <SeccionPopulares/>
      </div>

   

    </>
  )

}








