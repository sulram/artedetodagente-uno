import React from 'react'
import {useParams} from "react-router-dom"
import parse from 'html-react-parser'

import store from '../store'

import Header from './Header'
import Footer from './Footer'

function Page() {

  const {id} = useParams()
  const {pages} = store

  const content = pages[id] || pages[404]

  return (
    <>
      <Header title={content.title} url={`/${id}`} />
      <main className="main-content page-content">
        {parse(content.fulltext)}
      </main>
      <Footer />
    </>
  );
}

export default Page;
