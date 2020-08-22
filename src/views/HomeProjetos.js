import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import YouThumb from './YouThumb'

function HomeProjetos(props) {

  const {id, obras, title} = props

  return (
    <section id={id} className="base cursos" style={{backgroundColor: props.color || `#fdf204`}}>
      <div className="">
        <div className="title-box divider">
          <h2><Link to={`/#${id}`}>{title}</Link></h2>
        </div>
        <section className="videos-feed">
          {
            obras.reverse().map((obra)=>{
              const video = obra.aulas[0]
              const professor = obra.professor
              
              return(
                <article className="videos-feed-v" key={obra.id}>
                  <Link to={`/projetos/${id}/${obra.id}`} className="box">
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
          <Link to={`/projetos/${id}`} className="link-box">
            { props.label || `Acessar todos os vídeos de ${title}`}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeProjetos;
