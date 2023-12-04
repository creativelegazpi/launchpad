import { useEffect } from "react";

// images
import icon from '../../img/logo.png';
import bg1 from '../../img/home/bg-1.webp';

function Home(props) {
    useEffect(function() {

    });

    return (
        <div className="home bg-white">
            {/* Navbar*/}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white py-2">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="https://creativelegazpi.ph">
                        <img src={icon} className="tw-h-[53px]" alt="Creative Legazpi" />
                    </a>

                    <div className="d-flex d-lg-none">
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-black font-size-110 mt-3 mt-lg-0" href="#">Collections</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-black font-size-110" href="#">Artist Launchpad</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-black font-size-110" href="#">Artists</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 ps-2 pe-1 ps-xl-3 pe-xl-2">
                                <a className="nav-link font-size-110" href="#">
                                    <i className="fa-brands fa-facebook text-black tw-[red] font-size-190"></i>
                                </a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 mb-2 mb-lg-0">
                                <a className="nav-link font-size-110" href="">
                                    <i className="fa-brands fa-instagram-square text-black tw-[red] font-size-190"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="background-image-cover" style={{backgroundImage: `url(${bg1})`}}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center min-vh-100">
                        <div className="">
                            <p className="text-white text-center font-size-140 font-size-sm-140 font-size-md-180 font-size-lg-200 font-size-xl-220 font-size-xxl-230 mb-3 mb-md-0">Creative Legazpi's</p>
                            <p className="text-white text-center font-weight-700 line-height-120 font-size-340 font-size-sm-350 font-size-md-450 font-size-lg-600 font-size-xl-700 font-size-xxl-750">Artist Launchpad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home