import React from 'react'
import {useAuth} from "../../../../hooks";
import user_img from "../../../../assets/Negotium Assets/perfil.png"
import "./AdminProfile.css"

export function AdminProfile() {
    const {user} = useAuth();


    return (
    <div className='profile-cont'>
        <div className='profile-continfo'>
            <h3>{user.name} {user.lastname} </h3>
            <p>Admin</p>
        </div>
        <div className='profile-contimg'>
            <img className='img_profile' src={
                user.avatar ? user.avatar : user_img
            } alt='profile'/>
        </div>
    </div>
  )
}
