import React from 'react'
import './membresiasCont.css'
import MembresiaItem from './MembresiaItem/MembresiaItem'

export default function MembresiasCont() {

  const items =
    {
      free: [
        {
          text: "Hasta 15 Clientes"
        },
        {
          text: "Hasta 7 Servicios"
        },
        {
          text: "Hasta 3 Proveedores"
        }],
      standar: [
        {
          text: "Hasta 25 Clientes"
        },
        {
          text: "Hasta 12 Servicios"
        },
        {
          text: "Soporte Mensual",
        },
        {
          text: "Home Page Clientes"
        },
      ],
      premmium: [
        {
          text: "Clientes Ilimitados"
        },
        {
          text: "Servicios Ilimitados"
        },
        {
          text: "Provedores Ilimitados"
        },{
          text: "Soporte 16/7"
        },
        {
          text: "Home Page Clientes y Servicios"
        },
        {
          text: "Recordatorios Ilimitados"
        },
        {
          text: "Alertas Ilimitados"
        }]
    }



  return (
    <div className='membresias-cont'>
      <div className="membresia-cont">
        <MembresiaItem titulo="Free" items={items.free} color={"#FF9472"} />
        <MembresiaItem titulo="Standar" items={items.standar} color={"#5EBB5F"} />
        <MembresiaItem titulo="Premmium" items={items.premmium} color={"#BAA015"} />
      </div>
    </div>
  )
}
