import './header.scss';
import MenuBars from '../../assets/header/TLTerminals-header-collapse-menu.svg'

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
        </header>
    );
}

export default Header;