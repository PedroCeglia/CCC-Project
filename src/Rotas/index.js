import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Import Pages
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AreaSocio from '../Pages/AreaSocio'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/area-socio" element={<AreaSocio/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}