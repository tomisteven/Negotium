import React from 'react'

export default function TitleHeader({valueFilter, img, title}) {
  return (
    <div className="cont-titulo-header">
          <img className="img-header-services" src={img} alt="" />
          <h1 className="title-header">{title} / {valueFilter}</h1>
        </div>
  )
}
