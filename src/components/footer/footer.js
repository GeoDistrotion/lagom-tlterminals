import './footer.scss'

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row row-mb-wrap">
                    <div className="col-12 col-lg-2 ord-lg-1 ord-2">
                        <p>© 2020</p>
                    </div>
                    <div className="col-12 col-lg-10 ord-lg-2 ord-1">
                        <nav>
                            <ul className="row-mb-wrap">
                                <li className="col-12">
                                    <a href="#">Home</a>
                                </li>
                                <li className="col-12">
                                    <a href="#">Transloading</a>
                                </li>
                                <li className="col-12">
                                    <a href="#">Forwarding</a>
                                </li>
                                <li className="col-12">
                                    <a href="#">Ecofriendly</a>
                                </li>
                                <li className="col-12">
                                    <a href="#">FAQs</a>
                                </li>
                                <li className="col-12">
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