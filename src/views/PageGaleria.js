import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { FiDownload } from "react-icons/fi";
import Axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import api from '../services/api';
import ReactPlayer from 'react-player';

function PageGaleria(){

    const [midias, setMidias] = useState([]);
    const [viewed, setViewed] = useState(0);

    useEffect(() => {
        api.get(`galerias?_start=${viewed}&_limit=12&_sort=created_at:desc`)
          .then(({data}) => setMidias([...midias, ...data]));
      }, [viewed]);


    return(
        <>
            <Header title="Galeria" url={`/galeira`} />
            <main className="main-content page-content"> 
                <Masonry
                    breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                {
                    midias.map((item) => (
                        !!item.video_url 
                            ? <CardVideo data={item} />
                            : item.depoimento
                                ? <CardTestimony data={item} />
                                : <CardPhoto data={item} />
                    ))
                }
                </Masonry>
            </main>
            <Footer /> 
        </>
    )
}

export default PageGaleria;

function CardPhoto({ data }) {

    const image = `http://localhost:1339${data.image.formats.medium.url}`;
  
    async function download() {
      const res = await Axios.get(image, { responseType: 'blob' });
      const url = window.URL.createObjectURL(res.data);
      const a = document.createElement('a');
      a.href = url;
      a.download = data.image.formats.medium.name;
      a.click();
      a.remove();
    }
  
    return (
      <div className="card-photo">
        <div className="body">
          <div className="figure">
            <img src={image} alt=""/>
            <div className="fig-container">
              <div className="figcaption">{`Foto por: ${data.autor.nome}`}</div>
              <button onClick={download}>
                <FiDownload style={{marginBottom: '5px'}}/> 
              </button>
            </div>
          </div>
        </div >
      </div>
    )
  };
  
  CardPhoto.propTypes = {
    data: PropTypes.shape({
      image: PropTypes.shape(),
      autor: PropTypes.shape()
    }).isRequired,
  };

  function CardVideo({ data }) {

    return (
      <div className="card-video">
        <div className="body">
          <ReactPlayer 
            url={data.video_url}
            width="100%"
            height="250px"
            controls
            style={{flex: 1}}
          />
          <div>
            <p>{data.autor.nome}</p>
          </div>
        </div>
      </div>
    )
  };
  
  CardVideo.propTypes = {
    data: PropTypes.shape({
      image: PropTypes.shape(),
      autor: PropTypes.shape()
    }).isRequired,
  };

  function CardTestimony({ data }) {
    return (
      <div className="card-testimony">
        <div className="header">
          <div className="figure">
            <img src={`http://localhost:1339${data.image.url}`} alt=""/>
          </div>
          <h1>{data.autor.nome}</h1>
        </div>
        <div className="body">
          <p>{data.text}</p>
        </div>
      </div>
    )
  };
  
  CardTestimony.propTypes = {
    data: PropTypes.shape({
      autor: PropTypes.shape(),
      text: PropTypes.string.isRequired
    }).isRequired
  };