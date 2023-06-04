import React from 'react';
import myImage from '../img/logodw.png'
import "../Styles/card.css"


function ImageContact() {
    return (
        <>
            <section>
                <h1 className='h1'>Contato</h1>
                <div class="content">
                    <p className='p'>
                        Bem-vindo à nossa página de contato para se tornar um restaurante parceiro! Estamos empolgados em expandir nossa rede de estabelecimentos culinários excepcionais e oferecer aos nossos clientes uma experiência gastronômica ainda mais diversificada.


                    </p>
                </div>
                  <div class="img"><img className='adjust_image' src = {myImage}/></div>
            </section>

        </>

    );

}

export default ImageContact;