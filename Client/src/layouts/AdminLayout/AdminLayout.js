import React, {useState} from 'react'
import {Icon} from "../../assets"
import "./AdminLayout.scss"
import { AdminMenu } from '../../Components/Admin/AdminLayout';
import { useAuth } from '../../hooks/useAuth';
import { Logout } from '../../Components/Admin/AdminLayout/Logout';
import { AdminProfile } from '../../Components/Admin/AdminLayout/AdminProfile/AdminProfile';

import Logo from "../../assets/Negotium Assets/logoN.png"

export function AdminLayout(props) {
  const [loading, setLoading] = useState(false);
  const {logout} = useAuth();
  const { children  } = props;


  if(loading) return (<h1>Loading...</h1>);

  return (
    <div className='admin-layout'>
      <div className='admin-layout__left'>
        <img className='logo' src={Logo} alt='logo'/>
        <AdminMenu/> {/* contiene la barra lateral */}
        <Logout logout={logout}/>
      </div>
      <div className='admin-layout__right'>
        <div className="admin-layout__right-header">
          <AdminProfile />
        </div>
        <div className='admin-layout__right-content'>
          {children}
        </div>
      </div>
    </div>
  )
}
