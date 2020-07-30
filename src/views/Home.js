import React from 'react'
// import store from '../store'

import Header from './Header'
import Footer from './Footer'

import Landing from './Landing'
import HomeCursos from './HomeCursos'
import HomeVideos from './HomeVideos'

function Home() {
  return (
    <>
      <Header />
      <main className="main-content home-content">
        <Landing />
        <HomeCursos />
        <HomeVideos id="apresentacoes" color="#eee" label="Acessar todas as apresentações" />
        <HomeVideos id="palestras" color="#ddd" label="Acessar todas as palestras" />
        <HomeVideos id="repertorio-coral" color="#eee" label="Acessar todo repertório coral" />
      </main>
      <Footer />
    </>
  );
}

export default Home;
