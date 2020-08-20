import * as R from 'ramda'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import store from '../store'
import YouThumb from './YouThumb'
import useWindowSize from '../util/useWindowSize'

function HomeProjetos(props) {

  const {id} = props
  const content = store.projetos[id]
  const size = useWindowSize()

  const categories = R.slice(0, (size.width > 1024 ? 6 : 2), content.categories)

  return (
    <section id={id} className="base cursos" style={{backgroundColor: props.color || `#fdf204`}}>
      <div className="">
        <div className="title-box divider">
          <h2><Link to={`/#${id}`}>{content.title}</Link></h2>
        </div>
        <section className="videos-feed">
          {
            categories.map((cat)=>{
              const video = cat?.videos[0]
              return(
                <article className="videos-feed-v" key={cat.id}>
                  <Link to={`/projetos/${id}/${cat.id}`} className="box">
                    <YouThumb url={video.youtube} />
                    <p>{cat.info_title}: {cat.title}</p>
                  </Link>
                </article>
              )
            })
          }
        </section>
        <p>&nbsp;</p>
        <p>
          <Link to={`/projetos/${id}`} className="link-box">
            { props.label || `Acessar todos os vídeos de ${content.title}`}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeProjetos;
