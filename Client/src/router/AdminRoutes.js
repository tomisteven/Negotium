import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import {map} from "lodash"
import {Auth, Users, Courses, Menu, Recordatorios, Dashboard, Clients, Files, Files_c, Calendar} from "../pages/admin"
import {AdminLayout} from "../layouts"
import {useAuth} from "../hooks"
import Services from '../pages/admin/Services/Services'

//si el usuario esta logeado y es admin, entonces se le muestra el layout de admin
//const user = null;

export function AdminRoutes() {

    const {user} = useAuth(); //obtenemos el usuario logueado del contexto de autenticacion

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    }

    if(!user || typeof user === "undefined"){
        return (
            <Routes>
                <Route path="/admin/*" element={<Auth />} />
            </Routes>
        )
    }

    /* window.location.reload(); */


  return (
    <Routes>
        {
            !user ?
            (
                <Route path="/admin/*" element={<Auth />} />
            ) :
            (
                <>
                <Route path="/admin/dashboard" element={loadLayout(AdminLayout, Dashboard)} />
                <Route path="/admin/clients" element={loadLayout(AdminLayout, Clients)} /> {/* clientes */}
                <Route path="/admin/services" element={loadLayout(AdminLayout, Services)} /> {/* servicios x menu */}
                <Route path="/admin/calendar" element={loadLayout(AdminLayout, Calendar)} />
                <Route path="/admin/files" element={loadLayout(AdminLayout, Files_c)} />
                <Route path="/admin/recordatorios" element={loadLayout(AdminLayout, Recordatorios)} />
                <Route path="/admin/alerts" element={loadLayout(AdminLayout, Recordatorios)} />
                <Route path="/admin/newsletters" element={loadLayout(AdminLayout, Recordatorios)} />
                </>
            )
        }
    </Routes>
  )
}
