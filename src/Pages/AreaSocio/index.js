import React from "react";
import './style.css'

// Import React Router Dom
import { useNavigate } from "react-router-dom";

// Import Widgets
import Header from "../Widgets/Header";


export default function AreaSocio(){

    const navigate = useNavigate()

    const itensList = [
        {
            nome:"Home", 
            function: ()=>{
                navigate("/")
            }
        },{
            nome:"Sair",
            function: ()=>{
                console.log("sair")
            }
        }
    ]   

    const caiaqueList = [
        {name:"1-caiaque", src:'assets/caiaque-1.jpeg'},
        {name:"2-caiaque", src:'assets/caiaque-2.jpeg'},
        {name:"3-caiaque", src:'assets/caiaque-3.jpeg'},
        {name:"4-caiaque", src:'assets/caiaque-4.jpeg'},
        {name:"5-caiaque", src:'assets/caiaque-5.jpeg'},
        {name:"6-caiaque", src:'assets/caiaque-6.jpeg'}
    ]

    return(
        <div className="area-socio-container">
            <Header itensList={itensList}/>
            <section>
                <h2>Reserve um Caiaque</h2>
                <div className="search-view">
                    <input type='text' placeholder="Caiaque`s name :"/>
                    <button><img src="assets/search-icon.png" alt="Search Icon"/></button>                    
                </div>

                <div className="caiaques-list-area">
                    {
                        caiaqueList.map((item, key)=>{
                            return(
                                <article key={key} className="caiaque-item esgotado" title={item.name}>
                                    <div className="hover"></div>
                                    <div className="esgotado"><h2>Reseervado</h2></div>
                                    <img src={item.src} alt={item.name}/>
                                    <p>{item.name}</p>
                                </article>                                
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}