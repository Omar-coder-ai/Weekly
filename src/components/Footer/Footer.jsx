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
                    <li>Attualità e Politica</li>
                    <li>Internazionale</li>
                    <li>Società</li>
                    <li>Ambiente</li>
                    <li>Profili</li>

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
                        <li><a href="mailto:@.com?su">Scrivi alla redazione</a></li>
                    </span>
                   
                </section>

            </section>
                
            
            
            
            <p>&copy;{new Date().getFullYear()} Weekly.it | Tutti i diritti sono riservati | Privacy | Condizioni di utilizo</p>
        </section>
    )
}

export default Footer
