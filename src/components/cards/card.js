import React from 'react';
import './styles.css'

function Cards() {
    return (
        <div className='actor-cards-container'>
            <div id='atores' className='cards-content'>
                <div className="card banner1"><span>Robert Pattison - Batman</span></div>
                <div className="card banner2"><span>Zoe Kravitz - Mulher Gato</span> </div>
                <div className="card banner3"><span>Jeffrey Wright - Gordon</span></div>
            </div>
        </div>
    )
}

export default Cards;