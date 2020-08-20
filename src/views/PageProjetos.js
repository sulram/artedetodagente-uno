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
import YouThumb from './YouThumb'
import YouEmbed from './YouEmbed'

function PageProjetos() {

  const {id} = useParams()
  const {projetos} = store
  
  const content = projetos[id]

  const {path} = useRouteMatch()

  return (
    <>
      <Header title={content.title} url={`/projetos/${id}`} />
      <main className="main-content page-content">
        <Switch>
          <Route exact path={path}>
            <h3 className='title-1'><Link to={`/projetos/${id}`} className="link-box">{content.title}</Link></h3>
            <h3 className="title-2">Selecione uma categoria</h3>
            <section className="cat-feed">
              {
                content.categories.map((cat,i)=>{
                  const video = cat?.videos[0]
                  return(
                    <article className="cat-feed-item" key={`${i}-${cat.id}`}>
                      <Link to={`/projetos/${id}/${cat.id}`} className="link-box">
                        {cat.info_title}: {cat.title}
                      </Link>
                    </article>
                  )
                })
              }
            </section>
            <p>&nbsp;</p>
            <h3 className="title-2">Últimas publicações</h3>
            <section className="videos-feed">
              {
                content.categories.slice(0,3).map((cat, i)=>{
                  const video = cat?.videos[0]
                  return(
                    <article className="videos-feed-v" key={`${i}-${cat.id}`}>
                      <Link to={`/projetos/${id}/${cat.id}`} className="box">
                        <YouThumb url={video.youtube} />
                        <p>{cat.info_title}: {cat.title}</p>
                      </Link>
                    </article>
                  )
                })
              }
            </section>
          </Route>
          <Route path={`${path}/:catid`}>
            <PageVideos id={id} content={content} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function PageVideos(props) {

  const {id} = props
  const {catid} = useParams()
  const {path} = useRouteMatch()

  const content = R.find(R.propEq('id', catid), props.content.categories)

  return (
    <>
      <h3 className="title-2 mobile-hidden">
        <Link to={`/projetos/${id}`} className="link-box">{props.content.title}</Link>
        &nbsp;
        <Link to={`/projetos/${id}/${content.id}`} className="link-box">{content.info_title}: {content.title}</Link>
      </h3>
      <Switch>
        <Route exact path={path}>
          <InfoBox content={content} />
        </Route>
        <Route path={`${path}/:id`}>
          <Video parent={id} content={content} />
        </Route>
      </Switch>
      <p>&nbsp;</p>
      <h3 className="title-2">Todos os vídeos</h3>
      <section className="videos-feed">
        {
          content.videos.map((video)=>{
            return(
              <article className="videos-feed-v" key={video.id}>
                <Link to={`/projetos/${id}/${content.id}/${video.id}`} className="box">
                  <YouThumb url={video.youtube} />
                  <p>{video.title}</p>
                </Link>
              </article>
            )
          })
        }
      </section>
    </>
  );
}

function InfoBox(props) {
  const {content} = props
  return (
    <div className="info-box">
      <div
        className="figure"
        style={{
          background: `url(${content.cover}) no-repeat top center`,
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="box">
        <p className="text-box">{content.title}</p>
        <p>{content.text}</p>
        <p className="text-box">{content.info_title}</p>
        <p>{content.info_text}</p>
      </div>
    </div>
  )
}

function Video(props) {

  const {parent,content} = props
  const {id} = useParams()

  const video = R.find(R.propEq('id', id), content.videos)

  return (
    <>
      <YouEmbed url={video.youtube} />
      <h3>{video.title}</h3>
      <p>{video.text}</p>
    </>
  )
}


export default PageProjetos;
