import React from 'react'
import './footer.css'
import logo from "../../images/Weekly_logo_bianco.png"


function Footer() {
    return (
        <section className='footer'>
            <section className="container">
            <section className='footer-info-left'>
                    <p>Pagine:</p>
                    <span>
                    <li>Storie</li>
                    <li>A sud del mondo</li>
                    <li>Cultura & Società</li>
                    <li>La redazione</li>
                    </span>
                
                </section>
                <section className='footer-info-center'>
                    <p>Seguici su: </p>
                    <i className="fab fa-facebook-square fa-3x"></i>
                    <i className="fab fa-instagram fa-3x"></i>
                </section>

                <section className='footer-info-right'>
                    <img src={logo} alt="WEEKLY.it" />
                    <span>
                        <li>Contatti</li>
                        <li>info@weebly.it</li>
                        <li>Scrivi alla redazione</li>
                    </span>
                   
                </section>

            </section>
                
            
            
            
            <p>&copy;{new Date().getFullYear()} Weekly.it | Tutti i diritti sono riservati | Privacy | Condizioni di utilizo</p>
        </section>
    )
}

export default Footer
