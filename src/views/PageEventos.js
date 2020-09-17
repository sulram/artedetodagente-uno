import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import YouThumb from './YouThumb';
import YouEmbed from './YouEmbed';
import api from '../services/api';
import {Route, Switch, useParams, useRouteMatch, Link} from 'react-router-dom';

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
            <Header title="Eventos" url={"/eventos"} />
            <main className="main-content page-content">
                <Switch>
                    <Route exact path={path}>
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

                    </Route>
                    <Route path={`${path}/:id`}>
                        <Evento/>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

function Evento() {
    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            setVideos(response.data.video_url.slice(0, 6));
        }
        fetchData();
    }, [id]);

    const {path} = useRouteMatch();

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <main className="evento-page">
                        <h3 className="title-2 mobile-hidden">{`${evento.title}`.toUpperCase()}</h3>
                        <h3 className="text-box divider">TITULO DA AREA DE VIDEOS</h3>
                        <section className="videos-feed">
                            {videos.map( (video, key) => {
                                return(
                                    <article className="videos-feed-v" key={key}>
                                        <Link to={`/eventos/${evento.id}/${video.id}`} className="box" >
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
            setVideos(response.data.video_url);
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
                                <Link to={`/eventos/${evento.id}/${video.id}`} className="box" >
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
        async function fetchData(){
            const response = await api.get(`/eventos/${parent}`);
            setEvento(response.data);
            setVideo(response.data.video_url[id-1]);
        }
        fetchData();
    }, [id]);

    console.log(props);

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
                        console.log(photo)
                        return(
                            <article className="galeria-feed-item">
                                <div className="box">
                                    <img src={`http://localhost:1339${photo.url}`}></img>
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

    console.log(documentos);

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