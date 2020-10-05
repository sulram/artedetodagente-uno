import React, {useState, useEffect} from 'react';
import api from '../services/api';
import {Route, Switch, useRouteMatch, Link} from 'react-router-dom';
import {Evento} from './PageEventos';


function HomeEventos() {

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
                                        <Link to={`/eventos/${evento.slug}`} className="box">
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

export default HomeEventos;