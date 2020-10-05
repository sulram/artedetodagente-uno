import React, { useState, useEffect } from 'react'

import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'

import Header from './Header'
import Footer from './Footer'
import YouThumb from './YouThumb'
import YouEmbed from './YouEmbed'

import api from '../services/api'


function PageProjetos() {

  const {projeto_slug} = useParams()

  const [projeto, setProjeto] = useState([])
  const [obras, setObras] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/projetos/${projeto_slug}`)
      setProjeto(response.data)
      setObras(response.data.obras)
    }
    fetchData()
  },[projeto_slug])

  const {path} = useRouteMatch()

  return (
    <>
      <Header title={projeto.title} url={`/projetos/${projeto_slug}`} />
      <main className="main-content page-content">
        <Switch>
          <Route exact path={path}>
            <h3 className='title-1'><Link to={`/projetos/${projeto_slug}`} className="link-box">{projeto.title}</Link></h3>
            <h3 className="title-2">Selecione uma categoria</h3>
            <section className="cat-feed">
              {
                obras.map((obra,i)=>{
                  const professor = obra.professor

                  return(
                    <article className="cat-feed-item" key={`${i}-${obra.id}`}>
                      <Link to={`/projetos/${projeto_slug}/${obra.slug}`} className="link-box">
                        {professor.name}: {obra.title}
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
                obras.slice(0,3).map((obra, i)=>{
                  const video = obra.aulas[0]
                  const professor = obra.professor
                  return(
                    <article className="videos-feed-v" key={`${i}-${obra.id}`}>
                      <Link to={`/projetos/${projeto_slug}/${obra.slug}`} className="box">
                        <YouThumb url={video.video_url} />
                        <p>{professor.name}: {obra.title}</p>
                      </Link>
                    </article>
                  )
                })
              }
            </section>
          </Route>
          <Route path={`${path}/:obra_slug`}>
            <PageVideos projeto_slug={projeto_slug} content={projeto} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function PageVideos(props) {

  const {projeto_slug, content} = props
  const {obra_slug} = useParams()
  const {path} = useRouteMatch()

  const [obra, setObra] = useState([])
  const [aulas, setAulas] = useState([])
  const [professor, setProfessor] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const today = new Date().toISOString()
      const response = await api.get(`/obras/${obra_slug}`)
      const responseAulas = await api.get(`/aulas?obra=${response.data.id}&_sort=date:ASC&_where[date_lte]=${today}`)
      setObra(response.data)
      setAulas(responseAulas.data)
      setProfessor(response.data.professor)
    }
    fetchData()
  },[obra_slug])

  return (
    <>
      <h3 className="title-2 mobile-hidden">
        <Link to={`/projetos/${projeto_slug}`} className="link-box">{content.title}</Link>
        &nbsp;
        <Link to={`/projetos/${projeto_slug}/${obra.slug}`} className="link-box">{professor.name}: {content.title}</Link>
      </h3>
      <Switch>
        <Route exact path={path}>
          {professor.id && <InfoBox content={obra} id={professor.id} />}
        </Route>
        <Route path={`${path}/:id`}>
          <Video parent={projeto_slug} content={content} obra={obra} professor={professor.id} />
      </Route>
      </Switch>
      <p>&nbsp;</p>
      <h3 className="title-2">Todos os vídeos</h3>
      <section className="videos-feed">
        {
          aulas.map((aula)=>{
            return(
              <article className="videos-feed-v" key={aula.id}>
                <Link to={`/projetos/${projeto_slug}/${obra.slug}/${aula.id}`} className="box">
                  <YouThumb url={aula.video_url} />
                  <p>{aula.title}</p>
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
  const {content, id} = props
  const [professor, setProf] = useState([])
  const [image, setImage] = useState([])

  useEffect(()=>{
      async function fetchData(){
        const response = await api.get(`/professors/${id}`)
        setProf(response.data)
        setImage(response.data.image)
      }
      fetchData()
  },[id])

  return (
    <div className="info-box">
      <div
        className="figure"
        style={image.url && {
          background: `url(http://localhost:1339${image.formats.small.url}) center top / cover no-repeat`
        }}
      ></div>
      <div className="box">
        <p className="text-box">{content.title}</p>
        <p>{content.description}</p>
        <p className="text-box">{professor.name}</p>
        <p>{professor.bio}</p>
      </div>
    </div>
  )
}

function Video(props) {

  const [aula, setAula] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/aulas/${id}`)
      setAula(response.data)
    }
    fetchData()
  },[id])

  return (
    <>
      <YouEmbed url={aula.video_url} />
      <h3>{aula.title}</h3>
      <p>{aula.text}</p>
    </>
  )
}

export default PageProjetos;
