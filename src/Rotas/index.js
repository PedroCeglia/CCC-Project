import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Import Pages
import Home from '../Pages/Home'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}