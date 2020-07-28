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
      <Header title={content.title} />
      <main className="main-content page-content">
        {parse(content.fulltext.split("\n").join("<br/>"))}
      </main>
      <Footer />
    </>
  );
}

export default Page;
