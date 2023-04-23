import React from 'react'
import "./CountFiles.css"
import { Link } from "react-router-dom"

export function CountFiles({colors, img_files, name, up_file, view_files, clickModal}) {







  return (
    <div className='container-cont-items' style={{background: colors}} >
      <div className="cont-header">
        <img className='img-header' src={img_files} alt=""/>
        <h3 className='name-header'>{name}</h3>
      </div>
      <div className="cont-body-v2">
        <Link>
          <img  className='img-files' src={up_file} alt=""/>
        </Link>
        <Link to={"/admin/files"}>
          <img className='img-files' src={view_files} alt=""/>
        </Link>
      </div>
    </div>
    )
}
