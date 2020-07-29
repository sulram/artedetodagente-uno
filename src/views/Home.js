import React from 'react'
// import store from '../store'

import Header from './Header'
import Footer from './Footer'

import Landing from './Landing'
import Cursos from './Cursos'

function Home() {
  return (
    <>
      <Header />
      <main className="main-content home-content">
        <Landing />
        <Cursos />
      </main>
      <Footer />
    </>
  );
}

export default Home;
