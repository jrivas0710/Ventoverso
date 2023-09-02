import "./Footer.css"
import tiktok from './assets/tik_tok.png'
import Instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'

export const Footer = () => {
    return (
        <>

            <div className="grid-footer">

                <div className="footer1"><h1>footer1</h1></div>
                <div className="footer2"><h1>Tienda</h1>
                    <p>Inicio</p>
                    <p>Nosotros</p>
                    <p>Politicas de Privacidad</p>
                    <p>Termino y Condiciones</p>
                </div>
                <div className="footer3"><h1>Serivio al Cliente</h1>
                    <p>Centro de Ayuda</p>
                    <p>Seguimiento de Pedidos</p>
                    <p>Devoluciones y Reebolso</p>
                </div>
                <div className="footer4"><h1>Siguenos</h1>
                    <img className="Facebook" src={'facebook'}></img>
                    <img className="Instagram" src={'Instagram'}></img>
                    <img className="tik_tok" src= {'tiktok'}> </img> 
                    </div>
            </div>
        </>



    )
}

