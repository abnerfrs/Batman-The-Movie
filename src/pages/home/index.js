import React from 'react';
import Header from '../../components/header/header';
import './style.css';
import video from '../../assets/trailer-batman.mp4'
import Cards from '../../components/cards/card';

function Home() {

    return (
        <>
            <Header></Header>
            <div id='banner'></div>
            <div id='trailer-container'>
                <h1>Trailer:</h1>
                <div id='trailer' className='content'>
                    <video controls className='trailer'>
                        <source src={video} />
                        Seu navegador não tem suporte para video
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                            Atuante como um verdadeiro vigilante
                            em Gotham City depois que seus pais
                            foram assassinados, o bilionário
                            Bruce Wayne vai se deparar com um
                            desafio ainda maior quando vários inimigos.
                        </p>
                        <button className='button'>Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <h1 style={{marginLeft:'80px'}}>Atores:</h1>
            <Cards/>
        </>
    );
}

export default Home;
