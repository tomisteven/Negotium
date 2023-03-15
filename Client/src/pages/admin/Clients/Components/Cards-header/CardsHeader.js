import React from 'react'

export default function CardsHeader({user, userRefresh, title1, title2, dollar, userV2, userRefreshV2, gradient, color}) {
  return (
    <div className="cont-card-panel" style={
        {
            background: gradient
        }
    }>
            <div className="text-header">
              <h5 style={{
                color: color
              }} className="title-card" >{title1}</h5>
              <h5 style={{
                color: color
              }} className="title-body">{dollar}{userRefresh || user}</h5>
            </div>
            <div className="text-header">
              <h5 style={{
                color: color
              }} className="title-card">{title2}</h5>
              <h5 style={{
                color: color
              }} className="title-body">{dollar}{userRefreshV2 || userV2}</h5>
            </div>
          </div>
  )
}
