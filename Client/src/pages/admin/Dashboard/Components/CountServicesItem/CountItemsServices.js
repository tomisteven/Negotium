import React from 'react'
import "./countItemsServices.css"
import { Link } from "react-router-dom"


export function CountItemsServices({colors, name, url, cont1, cont2, img, imgUp, imgDown, imgSee, imgAdd}) {
  return (
    <div className='container-cont-items' style={{background: colors}}>
        <div  className='cont-items-header'>
            <img className='img-header' src={img} alt=""/>
            <h2 className='name-header-v2'>{name}</h2>
        </div>

        <div className='cont-2-bodys'>
            <div className='cont-body'>
                <h4 className='body-acumulacion'>Acumulacion</h4>
                <h3 className='cont-acumulacion'>$ {cont2}</h3>
            </div>
            <div className='cont-body'>
                <h4 className='body-acumulacion'>Acciones</h4>
                <div className='body-acciones'>
                    <Link className="link-actions" to={"/admin/services"}>
                        <img src={imgSee} className="img-up-v2" alt=""/>
                    </Link>
                    <Link className="link-actions" to={url}>
                    <img className="img-up-v2" src={imgAdd} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
            {/*  */}
    </div>
  )
}
