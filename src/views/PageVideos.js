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

  return (
    <>
      <Header title={content.title} />
      <main className="main-content video-content">
        {parse(content.fulltext.split("\n").join("<br/>"))}
        <p>&nbsp;</p>
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
      </main>
      <Footer />
    </>
  );
}

export default PageVideos;
