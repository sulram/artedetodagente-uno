import React from 'react'
// import store from '../store'

import Header from './Header'
import Footer from './Footer'

// import HomeLanding from './HomeLanding'
import HomeCursos from './HomeCursos'
import HomeVideos from './HomeVideos'
import HomeProjetos from './HomeProjetos'
import HomeNews from './HomeNews'

function Home() {
  return (
    <>
      <Header />
      <main className="main-content home-content">
        {/* <HomeLanding /> */}
        <HomeNews />
        <HomeCursos />
        <HomeVideos id="apresentacoes" label="Acessar todas as apresentações" />
        <HomeVideos id="palestras" label="Acessar todas as palestras" />
        <HomeProjetos id="oficinasderegencia" label="Acessar todas as oficinas" />
        <HomeProjetos id="repertorio-coral" label="Acessar todo repertório coral" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
