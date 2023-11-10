import React from "react";
import './header.css';
import Logo from '../../assets/batman.webp';
import { Link } from "react-router-dom";

function Header() {

    const hboMax = 'https://play.hbomax.com/feature/urn:hbo:feature:GYiDbSAmIpMNvYAEAAAAI?source=googleHBOMAX&action=open';

    return (
        <header>
            <Link to={'/'}>
                <img id="logo" src={Logo}></img>
            </Link>
            <nav>
                <ul>
                    <a href="#trailer"><li>Sobre o filme</li></a>


                    <a href="#atores"><li>Atores</li></a>
                    <a href={hboMax} target="_blank"><li>Assistir agora</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header;