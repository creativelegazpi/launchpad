import { useEffect } from "react";

// images
import icon from '../../img/logo.png';
import bg1 from '../../img/home/bg-1.webp';
import avatar from '../../img/home/avatar.webp';
import rocket from '../../img/home/rocket.webp';
import marso from '../../img/home/marso.webp';

function Home(props) {
    useEffect(function() {

    });

    return (
        <div className="home bg-white">
            {/* Navbar*/}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white py-2 tw-border-b-[#000000] tw-border-b-[1px]">
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

                            <p className="font-size-110 mb-5 pb-lg-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                            <div className="">
                                <button className="btn btn-custom-1 tw-rounded-[30px] px-5 tw-pb-[10px]">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-1 py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 mt-3">
                        <img src={rocket} className="tw-w-[220px] d-inline-block" alt="Creative Legazpi" />
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                            <div className="text-center">
                                <p className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700 mb-4">The Legazpi Artist Launchpad</p>
                                <p className="font-size-110 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-custom-1 tw-rounded-[30px] px-5 tw-pb-[10px]">Join the community</button>
                    </div>
                </div>
            </div>

            <div className="row align-items-center mx-0">
                <div className="col-md-6 col-lg-7 order-1 order-md-0">
                    <div className="d-flex justify-content-end w-100 py-5">
                        <div className="md:tw-max-w-[calc((720px/12)*6)] lg:tw-max-w-[calc((960px/12)*7)] xl:tw-max-w-[calc((1140px/12)*7)] xxl:tw-max-w-[calc((1320px/12)*7)] py-5 py-md-0 py-lg-5">
                            <div className="text-center text-md-start pe-md-3 pe-lg-5">
                                <p className="font-size-120 font-size-lg-130 font-size-xl-150 font-weight-500 mb-3">Featured Collection</p>
                                <p className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700">Marso</p>
                                <p className="font-size-120 font-size-lg-130 font-size-xl-150 font-weight-700 mb-4">“Glad to work with a group of intellectuals who aspire to be one of the best in the nft space.”</p>

                                <p className="font-size-110 mb-5 pb-lg-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className="">
                                    <button className="btn btn-custom-2 tw-rounded-[30px] px-5 tw-pb-[10px] me-sm-1 me-md-0 me-lg-1 tw-w-[217px] mb-2 mb-sm-0 mb-md-2 mb-lg-0">View Collections</button>
                                    <button className="btn btn-custom-3 tw-rounded-[30px] px-5 tw-pb-[10px] me-sm-1 ms-md-0 ms-lg-1 tw-w-[217px]">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-5 px-0 order-0 order-md-1">
                    <div className="background-image-cover tw-min-h-[calc(100vh-79px)]" style={{backgroundImage: `url(${marso})`}}></div>
                </div>
            </div>

            <div className="bg-color-2 py-5">
                <div className="container py-5">
                    <p className="text-center font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700 text-white mb-5">The Process</p>

                    <div className="row">
                        <div className="col-md-4 md:tw-mt-[50px] mb-5 mb-md-0">
                            <div className="text-center mb-4">
                                <div className="d-inline-block">
                                    <div className="tw-bg-[#F7CE00] rounded-circle d-flex justify-content-center align-items-center tw-w-[90px] tw-h-[90px]">
                                        <div className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700 tw-text-[#161616]">1</div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-white font-size-110 px-lg-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div className="col-md-4 md:tw-mt-[120px] mb-5 mb-md-0">
                            <div className="text-center mb-4">
                                <div className="d-inline-block">
                                    <div className="tw-bg-[#D7EDBD] rounded-circle d-flex justify-content-center align-items-center tw-w-[90px] tw-h-[90px]">
                                        <div className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700 tw-text-[#161616]">2</div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-white font-size-110 px-lg-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div className="col-md-4">
                            <div className="text-center mb-4">
                                <div className="d-inline-block">
                                    <div className="tw-bg-[#23D8D4] rounded-circle d-flex justify-content-center align-items-center tw-w-[90px] tw-h-[90px]">
                                        <div className="font-size-160 font-size-lg-230 font-size-xl-260 font-weight-700 tw-text-[#161616]">3</div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-white font-size-110 px-lg-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <p className="text-center text-lg-start font-size-250 font-size-lg-350 font-size-xl-400 line-height-130">Frequently<br/> Asked<br/> <span className="font-weight-700">Questions</span></p>
                    </div>

                    <div className="col-lg-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button font-size-130" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-4">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-4"
                                            aria-expanded="false" aria-controls="collapse-4">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-4" className="accordion-collapse collapse"
                                     aria-labelledby="heading-4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-5">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-5"
                                            aria-expanded="false" aria-controls="collapse-5">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-5" className="accordion-collapse collapse"
                                     aria-labelledby="heading-5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-6">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-6"
                                            aria-expanded="false" aria-controls="collapse-6">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-6" className="accordion-collapse collapse"
                                     aria-labelledby="heading-6" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-7">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-7"
                                            aria-expanded="false" aria-controls="collapse-7">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-7" className="accordion-collapse collapse"
                                     aria-labelledby="heading-7" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-8">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-8"
                                            aria-expanded="false" aria-controls="collapse-8">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-8" className="accordion-collapse collapse"
                                     aria-labelledby="heading-8" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{borderLeft:'none',borderRight:'none',borderWidth:'2px'}}>
                                <h2 className="accordion-header" id="heading-9">
                                    <button className="accordion-button collapsed font-size-130" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse-9"
                                            aria-expanded="false" aria-controls="collapse-9">
                                        What is Creative Legazpi's Artist Launchpad?
                                    </button>
                                </h2>
                                <div id="collapse-9" className="accordion-collapse collapse"
                                     aria-labelledby="heading-9" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element. These classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any of this with custom
                                        CSS or overriding our default variables. It's also worth noting that just about
                                        any HTML can go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home