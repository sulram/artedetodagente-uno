import React from 'react';
import Header from './Header';
import Footer from './Footer';


function PageEventos() {

    return( 
        <>
            <Header title="Eventos" url={"/eventos"} />
            <Footer />
        </>
    )
}

export default PageEventos;