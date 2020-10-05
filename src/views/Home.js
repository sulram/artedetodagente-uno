import React, { useState, useEffect } from 'react'
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

import api from '../services/api'


function Home() {
  const [projetos, setProj] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get('/projetos')
      setProj(response.data)
    }
    fetchData()
  },[])

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
        {projetos.map((projeto,i) =>
          <HomeProjetos key={i} title={projeto.title} id={projeto.id} label={projeto.button_label} obras={projeto.obras} projeto_slug={projeto.slug}/>
        )}
        {/*<HomeProjetos id="repertorio-coral" label="Acessar todo repertório coral" />*/}
        <HomeEventos />
      </main>
      <Footer />
    </>
  );
}

export default Home;
