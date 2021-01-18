import "./main-menu.scss";

function MainMenu(props){
    return(
        <nav id="MainMenu" className={props.menustatus}>
            <div className="container">
                <button className="close-btn" onClick={()=> props.onClick('menu-off')}>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Freight Transloading</a></li>
                <li><a href="index.html">Freight Forwarding</a></li>
                <li><a href="index.html">Ecofriendly</a></li>
                <li><a href="index.html">FAQs</a></li>
                <li><a href="index.html">Contact</a></li>
            </ul>
        </nav>
    );
}

export default MainMenu;