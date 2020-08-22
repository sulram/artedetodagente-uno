import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'
import YouThumb from './YouThumb'

import api from '../services/api'

function HomeVideos(props) {

  const [videos, setVideos] = useState([])

  const {id} = props


  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/${id}`)
      setVideos(response.data.reverse())
    }
    fetchData()
    
  },[])
 
  const content = store.videos[id]
  
  return (
    <section id={id} className="base cursos" style={{backgroundColor: props.color || `#fdf204`}}>
      <div className="">
        <div className="title-box divider">
          <h2><Link to={`/#${id}`}>{content.title}</Link></h2>
        </div>
        <section className="videos-feed">
          {
            videos.map((video)=>{
              return(
                <article className="videos-feed-v" key={video.id}>
                  <Link to={`/videos/${id}/${video.id}`} className="box">
                    <YouThumb url={video.video_url} />
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
