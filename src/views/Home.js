import React from 'react'
// import store from '../store'

import Header from './Header'
import Footer from './Footer'

// import HomeLanding from './HomeLanding'
import HomeCongresso from './HomeCongresso'
import HomeCursos from './HomeCursos'
import HomeVideos from './HomeVideos'
import HomeProjetos from './HomeProjetos'
import HomeNews from './HomeNews'
import HomeVideoEspecial from './HomeVideoEspecial'
import HomeEventos from './HomeEventos'

function Home() {
  
  return (
    <>
      <Header />
      <main className="main-content home-content">
        {/* <HomeLanding /> */}
        <HomeNews />
        <HomeCongresso />
        <HomeVideoEspecial />
        <HomeCursos />
        <HomeVideos id="apresentacoes" label="Acessar todas as apresentações" />
        <HomeVideos id="palestras" label="Acessar todas as palestras" />
        <HomeProjetos id="oficinas-de-regencia" />
        <HomeProjetos id="repertorio-coral" />
        <HomeEventos />
      </main>
      <Footer />
    </>
  );
}

export default Home;
