/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../assets/styles/Footer-style.css';

// eslint-disable-next-line import/prefer-default-export
export const Footer = () => (
  <React.Fragment>

    <section className='contact'>
      <div className='container'>

        <form action='/suscripcion/' className='form-email'>
          <h4>Contact us:</h4>
          <h6>macapripe@gmail.com</h6>
        </form>
      </div>

    </section>
    <footer className='footer'>
      <div className='container'>
        <h6> By: Marla Carolina Prieto Pelayo</h6>
      </div>
    </footer>
  </React.Fragment>

);
