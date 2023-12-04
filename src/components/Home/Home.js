import { useEffect } from "react";

// images
import icon from '../../img/logo.png';
import bg1 from '../../img/home/bg-1.webp';
import avatar from '../../img/home/avatar.webp';

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

            <div className="background-image-cover tw-pt-[79px]" style={{backgroundImage: `url(${bg1})`}}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center tw-min-h-[calc(100vh-79px)] py-5">
                        <div className="py-5 mb-5">
                            <p className="text-white text-center font-size-140 font-size-sm-140 font-size-md-180 font-size-lg-200 font-size-xl-220 font-size-xxl-230 mb-3 mb-md-0">Creative Legazpi's</p>
                            <p className="text-white text-center font-weight-700 line-height-120 font-size-360 font-size-sm-350 font-size-md-450 font-size-lg-600 font-size-xl-700 font-size-xxl-750">Artist Launchpad</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row justify-content-center align-items-center py-5">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-5 mb-md-0">
                        <img src={avatar} className="w-100" alt="Creative Legazpi" />
                    </div>

                    <div className="col-md-6 col-lg-8 ps-4 ps-lg-5">
                        <div className="text-center text-md-start">
                            <p className="font-size-120 font-size-lg-130 font-size-xl-150 font-weight-500 mb-3">Featured Collection</p>
                            <p className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700">Avatar: The Way of Water</p>
                            <p className="font-size-120 font-size-lg-130 font-size-xl-150 font-weight-700 mb-4">by Raf Banzuela</p>

                            <p className="mb-5 pb-lg-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                            <div className="">
                                <button className="btn btn-custom-1 tw-rounded-[30px] px-5 tw-pb-[10px]">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home