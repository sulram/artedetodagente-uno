import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import YouThumb from './YouThumb';
import YouEmbed from './YouEmbed';
import api from '../services/api';
import {Route, Switch, useParams, useRouteMatch, Link} from 'react-router-dom';
import { none } from 'ramda';


function PageEventos() {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get('/eventos');
            setEventos(response.data);
        }
        fetchData();
    }, []);

    const {path} = useRouteMatch();
    
    return( 
        <>          
            <Switch>
                <Route exact path={path}>
                    <section className="eventos">
                        <h3 className="text-box">Eventos</h3>
                        <p>&nbsp;</p>
                        <section className="eventos-feed">
                            {eventos.map((evento,key) => {
                                return(
                                    <article className="eventos-feed-item" key={key}>
                                        <Link to={`/eventos/${evento.id}`} className="box">
                                            <p><strong>{evento.title}</strong></p>
                                        </Link>
                                    </article>
                                )
                            })}
                        </section>
                    </section>
                </Route>
                <Route path={`${path}/:id`}>
                    <Evento/>
                </Route>
            </Switch>           
        </>
    );
}

function Evento() {
    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [videos, setVideos] = useState([]);
    const [banner, setBanner] = useState([]);
    const [isToggleOn, setIsToggleOn] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            setVideos(response.data.videos.slice(0, 6));
            setBanner(response.data.banner);
        }
        fetchData();
    }, [id]);

    const hideSection = () => {
        setIsToggleOn(!isToggleOn);
        const section = document.getElementsByClassName('banner-text');
        const button = document.getElementsByClassName('text-button');


        if(!isToggleOn){
            section[0].style.height = 'auto';
            button[0].innerHTML = 'LEIA MENOS';
        }else{
            section[0].style.height = '14rem';
            button[0].innerHTML = 'LEIA MAIS';
        }
    }

    const {path} = useRouteMatch();

    return (
        <>
            <Header title={evento.title} url={`/eventos/${evento.id}`} />
            <main className="main-content page-content">
                <Switch>
                    <Route exact path={path}>
                        <main className="evento-page">
                            <h3 className="title-2 mobile-hidden">{`${evento.title}`.toUpperCase()}</h3>
                            <div className="banner-text-container">
                                <section className="banner-text">
                                    <img className="banner" src={`https://admin.umnovoolhar.art.br${banner.url}`}/>
                                    <p>{evento.description}</p>
                                </section>
                                <button onClick={hideSection} className="text-button" style={{border:none}}>LEIA MAIS</button>
                            </div>
                            <h3 className="text-box divider">{evento.titulo_area_videos}</h3>
                            <section className="videos-feed">
                                {videos.map( (video, key) => {
                                    return(
                                        <article className="videos-feed-v" key={key}>
                                            <Link to={`/eventos/${evento.id}/${key}`} className="box" >
                                                <YouThumb url={video.video_url}/>
                                                <p>{video.video_title}</p>
                                            </Link>
                                        </article>
                                    )
                                })}
                            </section>
                            <Link to={`/eventos/${evento.id}/videos`} className="link-box">CARREGAR MAIS</Link>
                            <h3 className="text-box divider">FOTOS E DOCUMENTOS</h3>
                            <section className="button-container">
                                <Link to={`/eventos/${evento.id}/galeria`} className="link-box">ACESSAR A GALERIA DE FOTOS DO EVENTO</Link>
                                <Link to={`/eventos/${evento.id}/documentos`} className="link-box">ACESSA OS ARQUIVOS E DOCUMENTOS DO EVENTO</Link>
                            </section>
                        </main>
                    </Route>
                    <Route path={`${path}/galeria`}>
                        <GaleriaEvento evento={evento}/>
                    </Route>
                    <Route path={`${path}/documentos`}>
                        <DocumentosEvento/>
                    </Route>
                    <Route path={`${path}/videos`}>
                        <Videos/>
                    </Route>
                    <Route path={`${path}/:id`}>
                        <Video parent={id}/>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

function Videos(){


    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            setVideos(response.data.videos);
        }
        fetchData();
    }, [id]);

    

    return(
        <>
            <main className="evento-documentos">
                <h3 className="title-2 mobile-hidden">
                     <Link to={`/eventos/${evento.id}`} className="title-box" style={{ textDecoration: 'none' }}> {`${evento.title}`.toUpperCase()} </Link>
                     >> VIDEOS
                </h3>
                <section className="videos-feed">
                    {videos.map( (video, key) => {
                        return(
                            <article className="videos-feed-v" key={key}>
                                <Link to={`/eventos/${evento.id}/${key}`} className="box" >
                                    <YouThumb url={video.video_url}/>
                                    <p>{video.video_title}</p>
                                </Link>
                            </article>
                        )
                    })}
                </section>
            </main>
        </>
    );

}

function Video(props) {
    const {parent} = props; 
    const {id} = useParams();
    const [video, setVideo] = useState([]);
    const [evento, setEvento] = useState([]);

    useEffect(() => {
        async function fetchDataEvento(){
            const response = await api.get(`/eventos/${parent}`);
            setEvento(response.data);
            setVideo(response.data.videos[id]);
        }
        fetchDataEvento();
    }, [id]);

    console.log(evento);

    return(
        <>
            <main className="evento-documentos">
                <h3 className="title-2 mobile-hidden">
                     <Link to={`/eventos/${evento.id}`} className="title-box" style={{ textDecoration: 'none' }}> {`${evento.title}`.toUpperCase()} </Link>
                     >>
                     <Link to={`/eventos/${evento.id}/videos`} className="title-box" style={{ textDecoration: 'none' }}> VIDEOS </Link>
                     >> {`${video.video_title}`.toUpperCase()}
                </h3>
                <YouEmbed url={video.video_url} />
                <h3>{video.video_title}</h3>
            </main>
        </>
    )

}

function GaleriaEvento(props){

    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            setPhotos(response.data.photos);
        }
        fetchData();
    }, [id]);


    return(
        <>
            <main className="evento-galeria">
                <h3 className="title-2 mobile-hidden">
                     <Link to={`/eventos/${evento.id}`} className="title-box" style={{ textDecoration: 'none' }}> {`${evento.title}`.toUpperCase()} </Link>
                     >> GALERIA
                </h3>
                <section className="galeria-feed">
                    {photos.map( photo => {
                        return(
                            <article className="galeria-feed-item">
                                <div className="box">
                                    <img src={`https://admin.umnovoolhar.art.br${photo.url}`}></img>
                                    <p>{photo.name}</p>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </main>
        </>
    );

}

function DocumentosEvento(props){

    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [documentos, setDocumentos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            setDocumentos(response.data.files);
        }
        fetchData();
    }, [id]);

    return(
        <>
            <main className="evento-documentos">
                <h3 className="title-2 mobile-hidden">
                     <Link to={`/eventos/${evento.id}`} className="title-box" style={{ textDecoration: 'none' }}> {`${evento.title}`.toUpperCase()} </Link>
                     >> ARQUIVOS E DOCUMENTOS
                </h3>
                <section className="documentos-feed">
                    {documentos.map(documento => {
                        return(
                            <article className="link-box">
                                <a href={documento.url} target="blank">{documento.name}</a>
                            </article>
                        )
                    })}
                </section>
            </main>
        </>
    );

}



export default PageEventos;