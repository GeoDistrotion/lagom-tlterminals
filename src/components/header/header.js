import './header.scss';
import MenuBars from '../../assets/header/TLTerminals-header-collapse-menu.svg'
import MainMenu from './mainmenu/main-menu';

function Header(){
    return(
        <header>
            <div className="container">
                <div className="row">
                    <h1 className="col-6 col-lg-6">
                        TLTerminals
                    </h1>
                    <div className="col-6 col-lg-6">
                        <button id="MenuBars">
                            <img src={MenuBars} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <MainMenu></MainMenu>
        </header>
    );
}

export default Header;