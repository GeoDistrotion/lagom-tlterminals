import './header.scss';
import MenuBars from '../../assets/header/TLTerminals-header-collapse-menu.svg'
import MainMenu from './mainmenu/main-menu';
import React, { useState } from 'react';

function Header(){
    const [statusmenu, setStatusMenu] = useState('menu-off');
    return(
        <header>
            <div className="container">
                <div className="row">
                    <h1 className="col-6 col-lg-6">
                        TLTerminals
                    </h1>
                    <div className="col-6 col-lg-6">
                        <button id="MenuBars" onClick={ () => setStatusMenu('menu-on')} onTouchStart={ () => setStatusMenu('menu-on')}>
                            <img src={MenuBars} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <MainMenu menustatus={statusmenu} onClick={value => setStatusMenu(value) } />
        </header>
    );
}

export default Header;