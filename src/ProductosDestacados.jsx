import './ProductosDestacados.css'

export const Destacados = () => {

    return (
        <>


            <div className='productos-destacados'>


            {/* todo esto sera luego un solo componente que se renderizara con map  */}

                <div>
                    <h2 className='texto-productos-destacados'>Productos Destacados</h2>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>


                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>
                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>
                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>
                <div>
                    <div className='producto'></div>
                    <div className='nombre-precio-ranking'>
                        <img src="images/estrellas.png" alt="ranking" className='ranking' />
                        <span className='nombre-producto'>Nombre del producto</span>
                        <span className='precio'>$99.999</span>
                    </div>
                </div>


            </div>
        </>)
}