import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import {map} from "lodash"
import {Auth, Users, Blog, Courses, Menu, Newsletter} from "../pages/admin"
import {AdminLayout} from "../layouts"
import {useAuth} from "../hooks"

//si el usuario esta logeado y es admin, entonces se le muestra el layout de admin
//const user = null;

export function AdminRoutes() {

    const {user} = useAuth(); //obtenemos el usuario logueado del contexto de autenticacion
    //console.log(user);
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    }

  return (
    <Routes>
        {
            !user ?
            (
                <Route path="/admin/*" element={<Auth />} />
            ) :
            (
                <>
                {["/admin", "/admin/blog"].map((path, index) => (
                    <Route key={index} path={path} element={loadLayout(AdminLayout, Blog)} />
                ))}
                <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
                <Route path="/admin/courses" element={loadLayout(AdminLayout, Courses)} />
                <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
                <Route path="/admin/newsletter" element={loadLayout(AdminLayout, Newsletter)} />
                </>
            )
        }
    </Routes>
  )
}
