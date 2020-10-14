import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import api from '../services/api'

import Header from './Header'
import Footer from './Footer'

import '../css/professor.css'

import ReactMarkdown from 'react-markdown'

export default function Professor(props){

    const {id} = useParams()

    const [professor, setProfessor] = useState([])
    const [image, setImage] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const response = await api.get(`/professors/${id}`)
            setProfessor(response.data)
            setImage(response.data.image)
        }
        fetchData()
    },[id])

    return(
        <>
            <Header title="Professor" url={`/professor/${id}`} />
            <main className="main-content page-content">
            <h3 className="title-2 mobile-hidden">
                <Link to={`/projetos/Repertorio-Coral`} className="link-box">Repertório Coral</Link>
                    &nbsp;
            </h3>
                <div className="professor-container">
                    <div className="professor-pic">
                        <img src={`https://admin.umnovoolhar.art.br${image.url}`} alt=""/>
                    </div>
                    <div className="professor-bio">
                        <ReactMarkdown source={professor.bio} />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}