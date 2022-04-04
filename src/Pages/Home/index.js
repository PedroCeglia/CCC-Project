import React from 'react'
import "./style.css"

export default function Home(){
    return(
        <div className='home-container'>
            <header>
                <img src="assets/ccc-logo.png"/>
            </header>
            <section>
                <h2>Conheça o Rio de Janeiro com outro olhar</h2>
                <img src='assets/ccc-image-6.png' alt='image 6'/>
            </section>
            <article>
                <h2>Quem somos?</h2>
                <div className='sobre-container'>
                    <div className='image-container'>
                        <img src="assets/ccc-image-7.png" alt="image 7"/>                        
                        <img src="assets/ccc-image-4.png" alt="image 4"/>                        
                    </div>

                    <p className='paragraph-main'>
                        <p>                        
                            O Clube Carioca de Canoagem é uma associação desportiva sem fins lucrativos,
                            sem vocação competitiva,
                            dedicada ao esporte participativo e de lazer.
                        </p>
                        <p>
                        Criado com objetivo de fomentar a prática e o desenvolvimento da canoagem oceânica recreativa,
                         favorecer a descoberta e a proteção dos ambientes marinho e costeiro e contribuir na difusão da cultura náutica.
                        </p>
                    </p>
                </div>
            </article>
            <section>
                <img src='assets/ccc-image-5.png' alt='image 5'/>
            </section>
            <article>
                <h2>Onde Ficamos?</h2>
                <p className='loc2'>Venha nos conhecer pessoalmente !</p>
                <div className='localizacao-container'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.5118257621806!2d-43.164121870834926!3d-22.948484964097617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99803d69234edd%3A0x1cd7b1139889b595!2sClube%20Carioca%20de%20Canoagem%20-%20CCC!5e0!3m2!1spt-BR!2sbr!4v1649104187029!5m2!1spt-BR!2sbr"
                        width="600" 
                        height="450"
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                    <p>
                        Nos reunimos nas 
                        <span>Terças, Quintas e Sabados</span>
                        <span>às 6:00h as 9:00h</span>
                    </p>
                </div>
                <p className='loc'>
                    Localização :  
                    <a href='https://goo.gl/maps/ZuX7REQzbPrYXmiU6'>55, Al. Floriano Peixoto, 13 - Urca, Rio de Janeiro - Brasil</a>
                </p>
            </article>
        </div>
    )
}