import './page-home.scss';
import HomeMainTrains from "../../assets/sect-home/TLTerminals-home-train.png";
import HomeMainTrains02 from "../../assets/sect-home/TLTerminals-home-train-02.png";
import HomeClient01 from "../../assets/sect-home/TLTerminals-home-client-ferromex.jpg";
import HomeClient02 from "../../assets/sect-home/TLTerminals-home-client-KCSM.jpg";

function HomePage(){
    return(
        <div id="HomePage" className="main-container">
            <section className="sect-01 bdr-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 bdr-right">
                            <div className="img-cont">
                                <img src={HomeMainTrains} alt="TLTermial" />
                            </div>
                            <p>Shipping by rail is a more cost-effective option. Many shippers don ́t have tracks at their door. In TLT we provide transloading equipment and warehouses for storage at your site.</p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <ul className="detail-dots">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <h2>
                                We eliminate travel hassles
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sect-02 bdr-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 bdr-right">
                            <div className="customer-logos">
                                <div className="item-logo">
                                    <img src={HomeClient01} alt=""/>
                                </div>
                                <div className="item-logo">
                                    <img src={HomeClient02} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="customer-desc">
                                <div className="item-desc">
                                    <h3>Ferromex</h3>
                                    <p>Capacity 12 cars per day</p>
                                </div>
                                <div className="item-desc">
                                    <h3>Kansas City Southern Mex</h3>
                                    <p>Capacity 36 cars per day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sect-03 bdr-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 bdr-right">
                            <div className="usp-list">
                                <ul>
                                    <li>
                                        →  5k, 12 & 15.5k Lbs forklifts
                                    </li>
                                    <li>
                                        →  33 - 110k Lbs Crane
                                    </li>
                                    <li>
                                        →  Paper Roll Clamps
                                    </li>
                                    <li>
                                        →  Bulk Conveyor
                                    </li>
                                    <li>
                                        →  Rail scale
                                    </li>
                                    <li>
                                        →  Bottom Dump Unloading
                                    </li>
                                    <li>
                                        →  TRACTIVE EFFORT x 2
                                        <ul className="inner-list">
                                            <li>27,000 lbs</li>
                                            <li>30,000 lbs</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img-cont">
                                <img src={HomeMainTrains02} alt="TLTermial" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;