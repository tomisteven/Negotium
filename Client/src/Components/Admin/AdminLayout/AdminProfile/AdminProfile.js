import React from 'react'
import {useAuth} from "../../../../hooks";
import user_img from "../../../../assets/Negotium Assets/perfil.png"
import verificado from "../../../../assets/Negotium Assets/verificado2.png"
import noverificado from "../../../../assets/Negotium Assets/noverificado.png"
import "./AdminProfile.css"

export function AdminProfile() {
    const {user} = useAuth();

    return (
    <div className='profile-cont'>
        <div className='profile-continfo'>
            <h3><img className='verificado' src={user.membresia ? verificado : noverificado} alt=""/> {user.name} {user.lastname} </h3>
            <p>{user.membresia ? "Membresia Activa" : "Sin Membresia"}</p>
        </div>

        <div className='profile-contimg'>
            <img className='img_profile' src={
                /* user.avatar ? user.avatar :  */user_img
            } alt='profile'/>
        </div>
    </div>
  )
}
