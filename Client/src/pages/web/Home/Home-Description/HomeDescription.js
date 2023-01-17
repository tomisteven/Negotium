import React from 'react'
import "./HomeDescription.css"

export default function HomeDescription({titulo, descripcion, imagen}) {
  return (
    <>
        <div className="home-description">
            <div className='cont-img-description'>
                <img className='img-description' src={imagen} alt = "imagen" />
            </div>
            <div className='cont-description'>
                <h2 className='titulo-description'>{titulo}</h2>
                <p className='decription-description'>{descripcion}</p>
            </div>
        </div>
    </>
  )
}
