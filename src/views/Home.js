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
import PageEventos from './PageEventos';

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
        <HomeCursos />
        <HomeVideos id="apresentacoes" label="Acessar todas as apresentações" />
        <HomeVideos id="palestras" label="Acessar todas as palestras" />
        {projetos.map((projeto,i) => 
          <HomeProjetos key={i} title={projeto.name} id={projeto.id} label={projeto.button_label} obras={projeto.obras}/>
        )}
        {/*<HomeProjetos id="repertorio-coral" label="Acessar todo repertório coral" />*/}
        <PageEventos/>
      </main>
      <Footer />
    </>
  );
}

export default Home;
