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

  const {id} = useParams()

  const [projeto, setProjeto] = useState([])
  const [obras, setObras] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/projetos/${id}`)
      setProjeto(response.data)
      setObras(response.data.obras)
    }
    fetchData()
  },[id])

  const {path} = useRouteMatch()

  return (
    <>
      <Header title={projeto.name} url={`/projetos/${id}`} />
      <main className="main-content page-content">
        <Switch>
          <Route exact path={path}>
            <h3 className='title-1'><Link to={`/projetos/${id}`} className="link-box">{projeto.name}</Link></h3>
            <h3 className="title-2">Selecione uma categoria</h3>
            <section className="cat-feed">
              {
                obras.map((obra,i)=>{
                  const professor = obra.professor     

                  return(
                    <article className="cat-feed-item" key={`${i}-${obra.id}`}>
                      <Link to={`/projetos/${id}/${obra.id}`} className="link-box">
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
                      <Link to={`/projetos/${id}/${obra.id}`} className="box">
                        <YouThumb url={video.video_url} />
                        <p>{professor.name}: {obra.title}</p>
                      </Link>
                    </article>
                  )
                })
              }
            </section>
          </Route>
          <Route path={`${path}/:catid`}>
            <PageVideos id={id} content={projeto} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function PageVideos(props) {

  const {id, content} = props
  const {catid} = useParams()
  const {path} = useRouteMatch()

  const [obra, setObra] = useState([])
  const [aulas, setAulas] = useState([])
  const [professor, setProfessor] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const today = new Date().toISOString()
      const response = await api.get(`/obras/${catid}`)
      const responseAulas = await api.get(`/aulas?obra=${catid}&_sort=date:ASC&_where[date_lte]=${today}`)
      setObra(response.data)
      setAulas(responseAulas.data)
      setProfessor(response.data.professor)
    }
    fetchData()
  },[catid])
  

  return (
    <>
      <h3 className="title-2 mobile-hidden">
        <Link to={`/projetos/${id}`} className="link-box">{content.name}</Link>
        &nbsp;
        <Link to={`/projetos/${id}/${obra.id}`} className="link-box">{professor.name}: {content.name}</Link>
      </h3>
      <Switch>
        <Route exact path={path}>
          {professor.id && <InfoBox content={obra} id={professor.id} />}
        </Route>
        <Route path={`${path}/:id`}>
          <Video parent={id} content={content} obra={obra} professor={professor.id} />
      </Route>
      </Switch>
      <p>&nbsp;</p>
      <h3 className="title-2">Todos os vídeos</h3>
      <section className="videos-feed">
        {
          aulas.map((aula)=>{
            return(
              <article className="videos-feed-v" key={aula.id}>
                <Link to={`/projetos/${id}/${obra.id}/${aula.id}`} className="box">
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
          background: `url(https://admin.umnovoolhar.art.br${image.formats.small.url}) center top / cover no-repeat`
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
