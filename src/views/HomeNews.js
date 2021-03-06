import * as R from "ramda";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLink as Link } from "react-router-hash-link";
import useWindowSize from "../util/useWindowSize";
import { fdate, tweet } from "../util";

import api from "../services/api";

function HomeNews() {
  const size = useWindowSize();
  const [slideNext, setSlideNext] = useState(null);
  const [noticias, setNoticias] = useState([]);
  const [schedules, setSchedules] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const today = new Date().toISOString();
      const response = await api.get(
        `/noticias?_sort=date:DESC&_limit=3&_where[date_lte]=${today}`
      );
      setNoticias(response.data);
      setIsLoaded(true);
      const schedules = await api.get(
        `/schedule-events?_sort=date:ASC&_limit=4&_where[date_gte]=${today}`
      );
      const schedulesLastest = await api.get(
        `/schedule-events?_sort=date:DESC&_limit=4`
      );
      setSchedules(
        schedules.data.length < schedulesLastest.data.length
          ? schedulesLastest.data.reverse()
          : schedules.data
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext && slideNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [slideNext]);

  const latestPosts = R.slice(0, 3, noticias);
  const bindSwiper = (swiper) => setSlideNext(() => () => swiper.slideNext());
  const bgcover = (url) =>
    `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${url}) no-repeat 50% 50%`;

  return (
    <>
      <section className="home-news full-section">
        <div className="cols">
          <div className="col agenda center-out">
            <div className="text-box">Nossa Programação</div>
            <div className="center-in">
              {schedules.map((evento, i) => {
                const date = fdate(evento.date);
                return (
                  <div className="agenda-item" key={`agenda-${i}`}>
                    <div className="agenda-date">
                      <h3>{date.day}</h3>
                      <p>{date.month}</p>
                    </div>
                    <div className="agenda-content">
                      <h3>
                        {evento.time} | {evento.title}
                      </h3>
                      <p>{evento.text && tweet(evento.text, 140)}</p>
                    </div>
                  </div>
                );
              })}
              <div className="btn-container">
                <Link className="link-box" to="/agenda">
                  Ver programação completa
                </Link>
              </div>
            </div>
          </div>
          <div
            id="home-noticias"
            className="col slider-noticias center-out-off"
          >
            {!isLoaded && (
              <div className="loading">Carregando últimas notícias...</div>
            )}
            {isLoaded && (
              <Swiper loop={true} autoHeight={true} onSwiper={bindSwiper}>
                {latestPosts.map((noticia, i) => {
                  const date = fdate(noticia.date);
                  const image = noticia.image?.formats.medium ?? {
                    default: `/img/static/BG-Noticias-Padrao.png`,
                  };
                  return (
                    <SwiperSlide
                      key={`${noticia.id}-slide-${i}`}
                      style={{
                        background: bgcover(
                          image.url
                            ? `https://admin.umnovoolhar.art.br${image.url}`
                            : image.default
                        ),
                      }}
                    >
                      <article className="noticia">
                        <div className="wrapper">
                          {size.width <= 768 && (
                            <img
                              src={
                                image.url
                                  ? `https://admin.umnovoolhar.art.br${image.url}`
                                  : image.default
                              }
                              alt={noticia.title}
                            />
                          )}
                          <div className="bt-group">
                            <Link
                              className="bt"
                              to={`/noticias/${noticia.slug}`}
                            >
                              Leia mais
                            </Link>
                            &nbsp;
                            <button className="bt" onClick={() => slideNext()}>
                              Próxima notícia
                            </button>
                          </div>
                          <Link
                            className="content"
                            to={`/noticias/${noticia.slug}`}
                          >
                            <h3>{noticia.title}</h3>
                            <p className="post-call">{noticia.call}</p>
                            <p className="post-date">
                              Publicado em {date.day} de {date.month} de{" "}
                              {date.year}
                            </p>
                          </Link>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeNews;
