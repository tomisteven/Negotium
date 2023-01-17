import React from 'react'
import  {HeaderAndItems}  from '../../Components/Client/HeaderAndItems/index.js';
import './ClientLayout.css';

export function ClientLayout(props) {
    const { children  } = props;
  return (
    <div className='client-layout'>
        <HeaderAndItems />
         {children}
    </div>
  )
}
