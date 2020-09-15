import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
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
                                            <img src={`${api.defaults.baseURL}${evento.photos[0].url}`} alt={evento.title}/>
                                            <p><strong>{evento.title}</strong></p>
                                        </Link>
                                    </article>
                                )
                            })}
                        </section>

                    </Route>
                    <Route path={`${path}/:id`}>
                        <Evento eventos={eventos}/>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

function Evento(props) {
    const {id} = useParams();
    const [evento, setEvento] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/eventos/${id}`);
            setEvento(response.data);
        }
        fetchData();
    }, [id]);

    console.log(id);

    return (
        <>
            <h3 className="title-2 mobile-hidden">
                <Link to={`/eventos`} className="link-box">Notícias</Link>
                &nbsp;
                <p className="link-box">{evento.title}</p>
            </h3>
        </>
    );
}

export default PageEventos;