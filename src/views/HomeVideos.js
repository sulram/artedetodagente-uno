import * as R from 'ramda'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'
import YouThumb from './YouThumb'
import useWindowSize from '../util/useWindowSize'

function HomeVideos(props) {

  const {id} = props
  const content = store.videos[id]
  const size = useWindowSize()

  const videos = R.slice(0, (size.width > 1024 ? 6 : 2), content.videos)

  return (
    <section id={id} className="base cursos" style={{backgroundColor: props.color}}>
      <p>&nbsp;</p>
      <div className="">
        <div className="title-box">
          <h2><Link to={`/#${id}`}>{content.title}</Link></h2>
        </div>
        <section className="videos-feed">
          {
            videos.map((video)=>{
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
        <p>&nbsp;</p>
        <p>
          <Link to={`/videos/${id}`} className="link-box">
            { props.label || `Acessar todos os vídeos de ${content.title}`}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeVideos;
