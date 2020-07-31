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

function PageVideos() {

  const {id} = useParams()
  const {videos} = store

  const content = videos[id] || videos[404]

  const { path } = useRouteMatch()

  return (
    <>
      <Header title={content.title} url={`/videos/${id}`} />
      <main className="main-content page-content">
        <Switch>

          <Route exact path={path}>
            {parse(content.fulltext.split("\n").join("<br/>"))}
            <p>&nbsp;</p>
            <section className="videos-feed">
              {
                content.videos.map((video)=>{
                  return(
                    <article className="videos-feed-v" key={video.id}>
                      <Link to={`/videos/${id}/${video.id}`} className="box">
                        <YouThumb url={video.youtube} />
                        <p>{video.title}</p>
                      </Link>
                    </article>
                  )
                })
              }
            </section>
          </Route>

          <Route path={`${path}/:id`}>
            <Video parent={id} content={content} />
          </Route>

        </Switch>
      </main>
      <Footer />
    </>
  );
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
      <p>
        <Link className="link-box" to={`/videos/${parent}`}>voltar para vídeos de &ldquo;{content.title}&rdquo;</Link>
      </p>
    </>
  )
}


export default PageVideos;
