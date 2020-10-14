import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import useWindowSize from '../util/useWindowSize'
import { HashLink as Link } from 'react-router-hash-link'

import YouThumb from './YouThumb'

import api from '../services/api'

function HomeProjetos(props) {

  const {id} = props

  const [projeto, setProjeto] = useState([])
  const [obras, setObras] = useState([])

  const size = useWindowSize()
  
  useEffect(()=>{
    async function fetchData() {
      const response = await api.get(`/${id}`);
      setProjeto(response.data[0]);
      setObras(response.data[0].obras);
    }
    fetchData()
  },[id])

  const categories = R.slice(0, (size.width > 1024 ? 6 : 2), obras)

  return (
    
    <section id={id} className="base cursos" style={{backgroundColor: props.color || `#fdf204`}}>
      <div className="">
        <div className="title-box divider">
          <h2><Link to={`/#${id}`}>{projeto.title}</Link></h2>
        </div>
        <section className="videos-feed">
          {
            categories.reverse().map((obra)=>{
              const video = obra.aulas[0]
              const professor = obra.professor
              return(
                <article className="videos-feed-v" key={obra.id}>
                  <Link to={`/projetos/${projeto.slug}/${obra.slug}`} className="box">
                    <YouThumb url={video.video_url} />
                  <p>{professor.name}: {obra.title}</p>
                  </Link>
                </article>
              )
            
            })
          }
          
        </section>
        <p>&nbsp;</p>
        <p>
          <Link to={`/projetos/${projeto.slug}`} className="link-box">
            { projeto.label || `Acessar todos os vídeos de ${projeto.title}`}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeProjetos;
