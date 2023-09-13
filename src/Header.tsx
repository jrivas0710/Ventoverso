import { useState } from 'react'
import './Header.css'
import { SeccionPopulares } from './SeccionPopular.jsx'
import { Destacados } from './ProductosDestacados.jsx'
import { Iconos } from './Iconos'
import { Carrusel } from './Carrusel'
import { Footer} from './Footer'
import {SideSheet} from './SideSheet'


export const Header = () => {

  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);

  
  const openSideSheet = () => {
    setIsSideSheetOpen(true)
  };

  // Función para cerrar el SideSheet
  const closeSideSheet = () => {
    setIsSideSheetOpen(false)
  };




  return (
    <>

<div>
      <button onClick={openSideSheet}>Abrir SideSheet</button>

      {/* Renderiza el SideSheet y pasa las propiedades necesarias */}
      <SideSheet
       isOpen={isSideSheetOpen}
       onClose={closeSideSheet}>
        <h3>soy un children</h3>
      </SideSheet>
    </div>


    {/* header comienza aqui */}
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
              <a href="#"><li>Bronces</li></a>
              <a href="#"><li>Maderas</li></a>
              <a href="#"><li>Herramientas</li></a>
              <a href="#"><li>Accesorios</li></a>
              <a href="#"><li>Ofertas</li></a>
              <a href="#"><li>Ayuda</li></a>
            </ul>
          </section>


        </header>

        <Carrusel/>
        <Destacados/>
        <SeccionPopulares/>
        <Iconos/>
        <Footer/>




 






      </div>

   

    </>
  )

}








