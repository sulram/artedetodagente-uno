import React from 'react'
import YouEmbed from './YouEmbed'

function HomeVideoEspecial(){
    return(
        <>
            <section className="base video-especial" style={{backgroundColor: '#fdf204'}}>
                <div className="title-box divider">
                    <h2>Cure o Mundo - Uma mensagem de esperança e cura</h2>
                </div>
                <YouEmbed url="https://youtu.be/jB0rFfC-G8k" />
            </section>
        </>
    )
}

export default HomeVideoEspecial;