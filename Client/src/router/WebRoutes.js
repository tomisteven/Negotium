import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ClientLayout } from '../layouts';
import {Blog, Contact, Objetivos, Home, Post} from "../pages/web"

export function WebRoutes() {

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>     {/* Layout estatico */}
                <Page /> {/* children */}
            </Layout>
        );
    }

  return (
    <Routes>
        <Route path="/" element={loadLayout(ClientLayout, Home)} />
         <Route path="/objetivos" element={loadLayout(ClientLayout, Objetivos)} />
        <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
        <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
        <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
    </Routes>
  )
}
