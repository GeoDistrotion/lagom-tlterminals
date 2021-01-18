import './footer.scss'

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row row-mb-wrap">
                    <div className="col-12 col-lg-3 ord-lg-1 ord-2">
                        <p>© 2020</p>
                    </div>
                    <div className="col-12 col-lg-9 ord-lg-2 ord-1">
                        <nav>
                            <ul className="row-mb-wrap">
                                <li className="col-12">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="col-12">
                                    <a href="index.html">Transloading</a>
                                </li>
                                <li className="col-12">
                                    <a href="index.html">Forwarding</a>
                                </li>
                                <li className="col-12">
                                    <a href="index.html">Ecofriendly</a>
                                </li>
                                <li className="col-12">
                                    <a href="index.html">FAQs</a>
                                </li>
                                <li className="col-12">
                                    <a href="index.html">Contact</a>
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