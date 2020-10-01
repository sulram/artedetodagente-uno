import React, { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'

import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'

import Header from './Header'
import Footer from './Footer'

import api from '../services/api'


function PageNoticias() {

  const [noticias, setNoticias] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const today = new Date().toISOString()
      const response = await api.get(`/noticias?_sort=date:DESC&_where[date_lte]=${today}`)
      setNoticias(response.data)
    }
    fetchData()
  },[])

  const { path } = useRouteMatch()

  return (
    <>
      <Header title="Notícias" url={`/noticias`} />
      <main className="main-content page-content">
        <Switch>

          <Route exact path={path}>
            <h3 className='title-1'><Link to={`/noticias`} className="link-box">Notícias</Link></h3>
            <p>&nbsp;</p>
            <section className="noticias-feed">
              {
                noticias.map((noticia, i)=>{
                  const image = noticia.image || {default: `/img/static/BG-Noticias-Padrao.png`}
                  return(
                    <article className="noticias-feed-item" key={i}>
                      <Link to={`/noticias/${noticia.id}`} className="box">
                        <img src={image.url ? `https://admin.umnovoolhar.art.br${image.url}` : image.default} alt={noticia.title} />
                        <p><strong>{noticia.title}</strong></p>
                        <p>{noticia.call}</p>
                      </Link>
                    </article>
                  )
                })
              }
            </section>
          </Route>

          <Route path={`${path}/:id`}>
            <Single noticias={noticias} />
          </Route>

        </Switch>
      </main>
      <Footer />
    </>
  );
}

function Single(props) {

  const {id} = useParams()
  
  const [noticia, setNoticia] = useState([])
  const [image, setImage] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/noticias/${id}`)
      setNoticia(response.data)
      setImage(response.data.image)
    }
    fetchData()
  },[id])
  
  return (
    <>
      <h3 className="title-2 mobile-hidden">
        <Link to={`/noticias`} className="link-box">Notícias</Link>
        &nbsp;
        <Link to={`/noticias/${id}`} className="link-box">{noticia.title}</Link>
      </h3>
      <p>&nbsp;</p>
      {image &&
        <img
          alt={noticia.title}
          src={`https://admin.umnovoolhar.art.br${image.url}`}
          width="40%" style={{float:'right', margin: '40px 0 40px 40px'}}
        /> 
      }
      <ReactMarkdown 
        source={noticia.article}
      />
    </>
  )
}


export default PageNoticias;
