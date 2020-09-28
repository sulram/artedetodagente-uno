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
            <Header title="Eventos UNO" url={`/eventos`} />
            <main className="main-content page-content">     
            <Switch>
                <Route exact path={path}>
                    <section id="eventos" className="eventos">
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
            </main>     
            <Footer /> 
        </>
    );
}

function Evento() {
    const {id} = useParams();
    const [evento, setEvento] = useState([]);
    const [videos, setVideos] = useState([]);
    const [banner, setBanner] = useState([]);
    const [textIsToggleOn, setTextIsToggleOn] = useState(false);
    const [videoIsToggleOn, setVideoIsToggleOn] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
            videoIsToggleOn ? setVideos(response.data.videos) : setVideos(response.data.videos.slice(0, 6));
            setBanner(response.data.banner);
        }
        fetchData();
    }, [id, videoIsToggleOn]);


    const hideTextSection = () => {
        setTextIsToggleOn(!textIsToggleOn)
    }
    const hideVideoSection = () => {
        setVideoIsToggleOn(!videoIsToggleOn)
    }

    const {path} = useRouteMatch();

    return (
        <>
            <main className="main-content page-content">
                <Switch>
                    <Route exact path={path}>
                        <main className="evento-page">
                            <h3 className="title-2 mobile-hidden">{`${evento.title}`.toUpperCase()}</h3>
                            <div className="banner-text-container">
                                <section className="banner-content">
                                  <div className="banner-img">
                                    <img alt={evento.title} className="banner" src={`https://admin.umnovoolhar.art.br${banner.url}`}/>
                                  </div>
                                  <div className="banner-text" style={{height: textIsToggleOn ? `auto` : `14rem`}}>
                                    <p>{evento.description}</p>
                                  </div>
                                </section>
                                <button onClick={hideTextSection} className="text-button" style={{border:'none'}}>
                                  {textIsToggleOn ? `Leia menos` : `Leia mais`}
                                </button>
                            </div>
                            <h3 className="text-box divider">Vídeos</h3>
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
                            <button onClick={hideVideoSection} className="link-box">{videoIsToggleOn ? 'CARREGAR MENOS' : 'CARREGAR MAIS'}</button>
                        </main>
                    </Route>
                    <Route path={`${path}/:id`}>
                        <Video parent={id}/>
                    </Route>
                </Switch>
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

export default PageEventos;
export {Evento};