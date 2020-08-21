import * as R from 'ramda'
import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HashLink as Link } from 'react-router-hash-link'
import useWindowSize from '../util/useWindowSize'
import store from '../store'
import {fdate} from '../util'

function HomeNews() {

  const size = useWindowSize()
  const [slideNext, setSlideNext] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext && slideNext()
    }, 8000);
    return () => clearInterval(interval)
  }, [slideNext])

  const {noticias} = store

  const latestPosts = R.slice(0, 3, noticias)
  const bindSwiper = (swiper) => setSlideNext(() => () => swiper.slideNext())
  const bgcover = (url) => size.width > 768 ? `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${url}) no-repeat 50% 50%` : `black`

  return (
    <section id="home-noticias" className="slider-noticias">
      {noticias.length &&
        <Swiper
          loop={true}
          onSwiper={bindSwiper}
        >
          {latestPosts.map((noticia,i)=>{
            const date = fdate(noticia.date)
            return(
              <SwiperSlide key={`${noticia.id}-slide-${i}`}>
                <article
                  className="noticia"
                  style={{background: bgcover(`${noticia.cover}`) }}
                >
                  <div className="wrapper">
                    {size.width <= 768 && (
                      <img src={noticia.cover} alt={noticia.title} />
                    )}
                    <Link className="content" to={`/noticias/${noticia.id}`}>
                      <h3>{noticia.title}</h3>
                      <p>{noticia.call}</p>
                      <p className="post-date">Publicado em {date.day} de {date.month} de {date.year}</p>
                    </Link>
                    <div className="bt-group">
                      <Link className="bt" to={`/noticias/${noticia.id}`}>Leia mais</Link>
                      &nbsp;
                      <button className="bt" onClick={()=>slideNext()}>Próxima notícia</button>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      }
    </section>
  );
}

export default HomeNews;
