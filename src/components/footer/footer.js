import './footer.scss'

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <p>© 2020</p>
                    </div>
                    <div className="col-6 col-lg-10">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Transloading</a>
                                </li>
                                <li>
                                    <a href="#">Forwarding</a>
                                </li>
                                <li>
                                    <a href="#">Ecofriendly</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;