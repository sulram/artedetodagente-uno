import * as R from 'ramda'

import React from 'react'
import parse from 'html-react-parser'

import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'

import Header from './Header'
import Footer from './Footer'

function PageNoticias() {

  const {noticias} = store

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
                  return(
                    <article className="noticias-feed-item" key={i}>
                      <Link to={`/noticias/${noticia.id}`} className="box">
                        <img src={noticia.cover || `/img/static/BG-Noticias-Padrao.png`} alt={noticia.title} />
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

  const {noticias} = props
  const {id} = useParams()
  
  const noticia = R.find(R.propEq('id', id), noticias)
  
  return (
    <>
      <h3 className="title-2 mobile-hidden">
        <Link to={`/noticias`} className="link-box">Notícias</Link>
        &nbsp;
        <Link to={`/noticias/${id}`} className="link-box">{noticia.title}</Link>
      </h3>
      <p>&nbsp;</p>
      {noticia.cover &&
        <img
          alt={noticia.title}
          src={noticia.cover}
          width="40%" style={{float:'right', margin: '40px 0 40px 40px'}}
        /> 
      }
      {parse(noticia.article)}
    </>
  )
}


export default PageNoticias;
