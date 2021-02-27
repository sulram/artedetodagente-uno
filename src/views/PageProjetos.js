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

import '../css/repertorio.css'

import ReactPlayer from 'react-player'

import { Document, Page as Pager} from 'react-pdf/dist/umd/entry.webpack';

import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi'

const buttonStyle={
  fontSize: '0.8em',
  textDecoration: 'none',
  marginLeft: '1vh',
  color: 'red'
}

function PageProjetos() {

  const {projeto_slug} = useParams()

  const [projeto, setProjeto] = useState([])
  const [obras, setObras] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/${projeto_slug.toLowerCase()}`)
      setProjeto(response.data[0])
      setObras(response.data[0].obras)
    }
    fetchData()
  },[projeto_slug])

  const {path} = useRouteMatch()

  return (
    <>
      <Header title={projeto.title} url={`/projetos/${projeto_slug}`} />
      <main className="main-content page-content" style={{padding: '1rem'}}>
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
  const [professorObras, setProfObras] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const today = new Date().toISOString()
      const response = await api.get(`/obras/${obra_slug}`)
      const responseAulas = await api.get(`/aulas?obra=${response.data.id}&_sort=date:ASC&_where[date_lte]=${today}`)
      setObra(response.data)
      setAulas(responseAulas.data)
      setProfessor(response.data.professor)
      setProfObras(response.data.professor.obras)
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
          <Video 
            parent={projeto_slug} 
            content={content} 
            obra={obra} 
            professor={professor.id}
            professor_obras={professorObras}
            prof={professor}
          />
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



  console.log(image);

  return (
    <div className="info-box">
      <div
        className="figure"
        style={image.url && {
          background: `url(https://admin.umnovoolhar.art.br${image.url||image.formats.small.url}) center top / cover no-repeat`
        }}
      ></div>
      <div className="box">
        <p className="text-box">{content.title}</p>
        <p>{content.description}</p>
        <p className="text-box">{professor.name}</p>
        <p>{professor.mini_bio}</p>
        <Link style={buttonStyle} to={`/professor/${professor.id}`}> Saiba mais </Link>
      </div>
    </div>
  )
}

function Video({prof, professor_obras}) {

  const [aula, setAula] = useState([])
  const [audios, setAudios] = useState([])
  const [partituras, setPartituras] = useState([])
  const {id, projeto_slug} = useParams()


  useEffect(()=>{
    async function fetchData(){
      const response = await api.get(`/aulas/${id}`)
      setAula(response.data)
      setAudios(response.data.audios)
      setPartituras(response.data.partituras)
    }
    fetchData()
  },[id])

  return (
    <>
    { projeto_slug === "Repertorio-Coral" ? 
      <RepertorioVideo 
        aula={aula} 
        professor={prof}
        professorObras={professor_obras}
        audios={audios}
        partituras={partituras}
        /> :
      <>
      <YouEmbed url={aula.video_url} />
      <h3>{aula.title}</h3>
      <p>{aula.text}</p>
      </>
    }
    </>
  )
};

function RepertorioVideo({aula, professor, professorObras, audios, partituras}){

  const styles = {
    fontSize: '1em'
  }

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  function nextPage(){
    if(pageNumber === numPages) return;
    setPageNumber(pageNumber + 1)
  }

  function previousPage(){
    if(pageNumber <= 1) return;
    setPageNumber(pageNumber - 1)
  }

  return (
    <>
      <div className="repertorio-container">
        <div className="left-container">
          <div className="repertorio-video-container">
            <p className="acompanhe">
              Acompanhe a partitura:
            </p>
            <ReactPlayer 
              className="player"
              url={aula.video_url} 
              light={true} 
              controls={true} 
              loop={true} 
            />
            <div>
              <p className="repertorio-title">
                {professor.name}
              </p>
              <p className="repertorio-inner">
                {professor.mini_bio}
              </p>
              <a rel="noopener noreferrer" style={buttonStyle} href={`/professor/${professor.id}`} target="_blank">Saiba mais</a>
            </div>
            <div>
              <p className="repertorio-title">
                Download de arquivos
              </p>
              <p className="repertorio-inner">
                {
                  audios.map((audio,i)=>{
                    return <> <a key={i} rel="noopener noreferrer" href={`https://admin.umnovoolhar.art.br${audio.audio_file.url}`} download target="_blank">{audio.title}</a><br/></>
                  })
                }
              </p>
            </div>
              
            <div style={{marginBottom: '1rem'}}>
              <p className="repertorio-title" style={{backgroundColor: 'lightgreen'}}>
                Mais obras deste autor
              </p>
              <p className="repertorio-inner"  style={{backgroundColor: 'white'}}>
              {
                professorObras.map((obra, i)=>{
                  return <Link key={i} to={`/projetos/Repertorio-Coral/${obra.slug}`} style={styles}>{obra.title}</Link>
                })
              }
              </p>
            </div>
  
          </div>
        </div>
        <div className="partituras-container">
            <div className="partituras">
              {
                partituras.map((partitura,i)=>{
                  return (
                    <Document
                      className="pdf"
                      error="Aguarde um momento, carregando PDF..."
                      loading="Carregando PDF..."
                      file={`https://admin.umnovoolhar.art.br${partitura.partitura.url}`}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                    <Pager pageNumber={pageNumber} />
                    <div className="obra-buttons">
                      <button onClick={()=>previousPage()}><BiArrowFromRight/></button>
                        <p>Página {pageNumber} de {numPages}</p>
                      <button onClick={()=>nextPage()}><BiArrowFromLeft/></button>            
                    </div>
                    </Document>
                  )
                })
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default PageProjetos;
