import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {compiler} from 'markdown-to-jsx'

import Header from './Header'
import Footer from './Footer'
import DynamicPage from './DynamicPage'
import api from '../services/api'
import Palestrantes from './palestrantes'

function Page() {

  const {id} = useParams()
  const [page, setPage] = useState({page_title: `...`, page_text: `...`, Content: []})

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/page-builders?page_id=${id}`)
      setPage(response.data[0])
    }
    fetchData()
  },[id])


  return (
    <>
      <Header title={page.page_title} url={`/${id}`} />
      <main className="main-content page-content">
        {compiler(page.page_text)}
        <div className="page-zones">
        {page.Content.map( (component,i) => <DynamicPage key={i} data={component}/>)}
        </div>
        {id === 'congresso-internacional' ? <Palestrantes /> : null}
      </main>
      <Footer />
    </>
  );
}

export default Page;

