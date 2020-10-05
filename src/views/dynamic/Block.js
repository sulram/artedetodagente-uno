import React from 'react'

export default function Block({data}){

    return(
      <div className="dynamic-block">
        <h2 className="text-box">{data.title}</h2>
        <div className="dynamic-block-slider">
          {data.Slider && data.Slider.map(slide=>{
            return (
              <div className="dynamic-block-slider-item">
                <a
                  href={slide.Link}
                  title={slide.Caption}
                  rel="noopener noreferrer"
                  target="_blank"
                  >
                    <img
                      src={`http://localhost:1339${slide.Image.url}`}
                      alt={slide.Caption ? slide.Caption : null}/>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
}