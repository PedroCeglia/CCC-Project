import React, {useState, useEffect} from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// Import Auth API Functions

// Import Pages
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AreaSocio from '../Pages/AreaSocio'
import CreateUser from '../Pages/CreateUser'
import { verifyUserLog } from '../Firebase/API/Auth'

export default function Rotas(){

    const [user, setUser] = useState(null)
    useEffect(()=>{
        verifyUserLog(setUser)
        console.log(user)
    },[])


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path="/" element={<Home user={user}/>}/>
                    <Route path="/area-socio" element={<AreaSocio user={user}/>}/>
                    <Route path="/login" element={<Login user={user}/>}/>
                    <Route path="/create-user" element={<CreateUser user={user}/>}/>                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}