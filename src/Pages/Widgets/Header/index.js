import React, {useState, useEffect} from 'react'
import "./style.css"

// Import React Router Dom
import { Link } from 'react-router-dom'


export default function Header(props){

    // Get Itens List
    const [itensList, setItensList] = useState([])
    useEffect(()=>{
        setItensList(props.itensList)
    },[props.itensList])

    return(
        <header>
            <Link to="/"><img src="assets/ccc-logo.png" alt="logo-image"/></Link>
            <nav>
                {
                    itensList.map(( item, key )=>{
                        return(
                            <button key={key} onClick={item.function}>{item.nome}</button>
                        )
                    })
                }
            </nav>
        </header>
    )
}