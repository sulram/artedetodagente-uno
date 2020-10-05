import React from 'react'

export default function Cover({data}){

    return(
      <div className="block-cover">
        <img
          src={`http://localhost:1339${data.cover.url}`}
          style={{width: '100%', height: 'auto'}}
          alt={``}
        />
      </div>
    )
}