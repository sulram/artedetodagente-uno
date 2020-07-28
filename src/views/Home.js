import React from 'react'
import store from '../store'

import Header from './Header'
import Footer from './Footer'

import Landing from './Landing'

function Home() {
  return (
    <>
      <Header />
      <main className="main-content home-content">
        <Landing />
        <div style={{height:'1000px'}}>Hello home</div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
