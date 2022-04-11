import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Import Pages
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AreaSocio from '../Pages/AreaSocio'
import CreateUser from '../Pages/CreateUser'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/area-socio" element={<AreaSocio/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/create-user" element={<CreateUser/>}/>                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}