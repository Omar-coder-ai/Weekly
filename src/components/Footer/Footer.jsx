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
                <section className='footer-info-center1'>
                    <p className='informativa'>INFORMATIVA</p>
                    <p>Tutti i contenuti di WeeklyWeb possono essere utilizzati da altre testate o siti internet è molto gradito in caso citare la fonte con un link (follow) o collegamento visibile a weeklyweb.it e alla pagina dell'articolo.</p>

                </section>
                <section className='footer-info-center2'>
                    <p>Seguici su: </p>
                    <a href="https://facebook.com"><i className="fab fa-facebook-square fa-4x"></i></a>
                    <a href="https://instagram.com"><i className="fab fa-instagram fa-4x"></i></a>
                </section>

                <section className='footer-info-right'>
                    <img src={logo} alt="WEEKLYWEB.it" />
                    <span>
                        <li>Contatti</li>
                        <li>info@weeblyweb.it</li>
                        <li><a href="mailto:redazione@weeklyweb.it?">Scrivi alla redazione</a></li>
                        <a href="https://pluralsight.com">Disclaimer</a>
                    </span>
                   
                </section>

            </section>
                
            
            
            
            <p>&copy;{new Date().getFullYear()} Weeklyweb.it | Tutti i diritti sono riservati | Privacy | Condizioni di utilizo</p>
        </section>
    )
}

export default Footer
