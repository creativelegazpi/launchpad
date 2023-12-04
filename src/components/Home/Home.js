import { useEffect } from "react";

// images
import icon from '../../img/Hype_Icon.png';
import mascot from '../../img/Hype_Mascot.png';
import twitter from '../../img/twitter.png';
import telegram from '../../img/telegram.png';
import etherscan from '../../img/etherscan.png';
import tokenomics from '../../img/tokenomics.png';

function Home(props) {
    useEffect(function() {

    });

    return (
        <div className="home bg-white">
            {/* Navbar*/}
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-color-1">
                <div className="container py-2">
                    <a className="navbar-brand d-flex align-items-center" href="https://hypertokenio.github.io">
                        <img src={icon} alt="HYPER Token" width={60} />
                        <p className="bangers ps-4 mb-0 font-size-180">HYPER TOKEN</p>
                    </a>

                    <div className="d-flex d-lg-none">
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-white font-size-110 mt-3 mt-lg-0" href="#home">home</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-white font-size-110" href="#about">about</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-white font-size-110" href="#tokenomics">tokenomics</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3">
                                <a className="nav-link text-white font-size-110" href="#howtobuy">how to buy</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 px-xl-3 mb-2 mb-lg-0">
                                <a className="nav-link text-white font-size-110" href="#roadmap">roadmap</a>
                            </li>
                            <li className="nav-item font-size-90 font-size-xl-100 px-2 ps-xl-3">
                                <a className="nav-link text-white font-size-110 btn-custom-1 px-4 text-center" href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x54D8517985E74D5708fe45621C8E945C9e4218B9" target="_blank" rel="noreferrer">buy now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-color-2" id="home" style={{"paddingTop":"102px", "minHeight":"calc(100vh - 102px)"}}>
                <div className="container">
                    <div className="row align-items-center py-4 py-md-5 py-xl-3" style={{"minHeight":"calc(100vh - 102px)"}}>
                        <div className="col-md-5 mb-5">
                            <div className="mb-2">
                                <div className="row justify-content-center">
                                    <div className="col-11 col-sm-9 col-md-10">
                                        <img src={mascot} className="w-100" alt="HYPER Token" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-white font-size-140 font-size-sm-150 font-size-md-140 font-size-lg-150 font-size-xl-160 line-height-110 text-center mb-4 pb-3">@HyperTokenMeme</p>

                            <div className="row justify-content-center">
                                <div className="col-10 col-sm-7 col-md-11 col-lg-12 col-xl-11">
                                    <div className="row justify-content-center">
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://twitter.com/HyperTokenMeme" target="_blank" rel="noreferrer">
                                                <img src={twitter} className="w-100" alt="twitter" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://t.me/HyperTokenMeme" target="_blank" rel="noreferrer">
                                                <img src={telegram} className="w-100" alt="telegram" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://etherscan.io/token/0x54d8517985e74d5708fe45621c8e945c9e4218b9" target="_blank" rel="noreferrer">
                                                <img src={etherscan} className="w-100" alt="etherscan" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="text-center text-md-center pb-3 pb-md-0 mb-5 mb-md-0">
                                <h1 className="bangers text-white font-size-260 font-size-sm-270 font-size-md-210 font-size-lg-270 font-size-xl-330 mb-4">MEET HYPE, THE CROC WITH A DREAM</h1>
                                <p className="text-white font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-110 mb-4">Hype is no ordinary crocodile.<br /> he's the ultimate symbol of the meme community's power and the cutting-edge capabilities of AI.</p>
                                <p className="text-white font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-110 mb-4">with his stylish shades and a relentless drive for success, Hype represents the perfect fusion of $PEPE's meme mastery and $TURBO's AI-assisted technology.</p>
                                <p className="text-white font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-110 mb-0">together, they're ready to take the crypto world by storm!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-3 position-relative py-5">
                <div className="position-absolute invisible" id="about" style={{"top":"-102px"}}></div>

                <div className="container py-5">
                    <h2 className="bangers text-color-1 text-center font-size-260 font-size-sm-270 font-size-lg-270 font-size-xl-330 mb-5">ABOUT</h2>

                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4">Introducing HYPER Token - The Ultimate Meme Coin Experience</p>
                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4">Say hello to HYPER Token ($HYPER), the game-changing meme coin to redefine the crypto world with a massive splash!</p>
                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4">Get ready to ride the wave alongside our uber-cool crocodile mascot, Hype, as we bring together the most sensational aspects of the legendary $PEPE and the innovative $TURBO.</p>
                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4"><span className="fw-bold">Why HYPER Token? The Unstoppable Meme Movement:</span><br /> HYPER Token ($HYPER) isn't just another meme coin - it's a revolution! We're combining the raw energy of the $PEPE community with the futuristic vision of $TURBO to create an unstoppable force in the crypto market.</p>
                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-5 pb-4">Our goal is to build a community that thrives on creativity innovation, and an unbreakable spirit.</p>
                    <p className="text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 fw-bold fst-italic mb-0">"Unleash your inner Hype, and join the HYPER revolution!"</p>
                </div>
            </div>

            <div className="container py-5 position-relative">
                <div className="position-absolute invisible" id="tokenomics" style={{"top":"-102px"}}></div>

                <div className="py-5">
                    <h2 className="text-center text-md-start bangers text-color-1 font-size-260 font-size-sm-270 font-size-lg-270 font-size-xl-330 mb-5">TOKENOMICS</h2>

                    <div className="row align-items-center mb-5">
                        <div className="col-md-7 mb-4 mb-md-0">
                            <p className="text-center text-md-start text-color-1 font-size-sm-180 font-size-lg-220 mb-0">token supply:</p>
                            <p className="text-center text-md-start text-color-1 font-size-sm-270 font-size-md-270 font-size-lg-330">420,000,000,000</p>

                            <div className="text-center text-md-start bg-color-2 p-4 mb-4" style={{"borderRadius":"20px"}}>
                                <p className="font-size-sm-120 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 text-white mb-3">No Hidden Fees, No Nonsense.<br/> It's as straightforward as that.</p>
                                <p className="font-size-sm-120 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 text-white mb-3">Token supply: 420 Billion<br/> LP: 93.10%<br/> CEX: 6.90%</p>
                                <p className="font-size-sm-120 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 text-white mb-0">93.1% of the tokens were allocated to the liquidity pool, LP tokens were incinerated, and the contract was relinquished.<br /> The remaining 6.9% of the supply is securely stored in a multi-signature wallet, reserved exclusively for future centralized exchange listings, bridges, and liquidity pools.</p>
                            </div>

                            <p className="text-center text-md-start font-size-140 text-color-1 mb-3">Hyper Token adopts a distinctive tokenomics framework to guarantee an equitable and thriving distribution:</p>
                        </div>

                        <div className="col-md-5 ps-4">
                            <img src={tokenomics} className="w-100" alt="HYPER Token" />
                        </div>
                    </div>

                    <p className="montreuxjs-xbd text-center text-color-1 font-size-130 font-size-sm-140 font-size-md-110 font-size-lg-150 font-size-xl-160 font-size-xl-180 fw-bolder mb-0">Zero Fees <span className="mx-2 mx-lg-3">•</span> No&nbsp;Presale <span className="mx-2 mx-lg-3">•</span>&nbsp;Even&nbsp;distribution <span className="mx-2 mx-lg-3">•</span> Relinquished&nbsp;Contract</p>
                </div>
            </div>

            <div className="bg-color-3 py-5 position-relative">
                <div className="position-absolute invisible" id="howtobuy" style={{"top":"-102px"}}></div>

                <div className="container py-5">
                    <h2 className="text-center text-md-start bangers text-color-1 font-size-260 font-size-sm-270 font-size-lg-270 font-size-xl-330 mb-5">HOW TO BUY</h2>

                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4">Buying HYPER Token made easy:</p>

                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4"><span className="montreuxjs-xbd me-2">Step 1:</span> Install a wallet like MetaMask or Trust Wallet.</p>
                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4"><span className="montreuxjs-xbd me-2">Step 2:</span> Buy Ethereum (ETH) on a crypto exchange and send it to your wallet.</p>
                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4"><span className="montreuxjs-xbd me-2">Step 3:</span> Go to <a href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x54D8517985E74D5708fe45621C8E945C9e4218B9" className="link-color-1" target="_blank" rel="noreferrer" style={{"textDecoration":"underline"}}>Uniswap</a> and connect your wallet.</p>
                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4"><span className="montreuxjs-xbd me-2">Step 4:</span> Choose Hyper Token ($HYPER) and input the amount you want.</p>
                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4" style={{"wordBreak":"break-word"}}>Use this token address:<br/> <a href="https://etherscan.io/token/0x54d8517985e74d5708fe45621c8e945c9e4218b9" target="_blank" rel="noreferrer" className="font-size-80 font-size-md-100 link-color-1">0x54d8517985e74d5708fe45621c8e945c9e4218b9</a></p>
                    <p className="text-color-1 font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-5"><span className="montreuxjs-xbd me-2">Step 5:</span> Check transaction details, confirm the swap, and voila - Hyper Token is yours!</p>

                    <p className="text-center text-color-1 font-size-110 font-size-sm-120 font-size-md-100 font-size-lg-120 font-size-xl-140 line-height-120 fst-italic mb-0">*Keep in mind that trading fees and slippage might affect your purchase.</p>
                </div>
            </div>

            <div className="bg-color-1 py-5 position-relative">
                <div className="position-absolute invisible" id="roadmap" style={{"top":"-102px"}}></div>

                <div className="container py-5">
                    <h2 className="bangers text-white text-center font-size-260 font-size-sm-270 font-size-lg-270 font-size-xl-330 mb-5">ROADMAP</h2>

                    <div className="row justify-content-center mb-5">
                        <div className="col-xl-10">
                            <div className="text-center">
                                <p className="font-size-sm-120 font-size-xl-130 font-size-xxl-140 text-white mb-3">HYPER Token: The Future of Meme Coins<br/> By embracing the best of both memes and harnessing the power of AI, HYPER Token is on a mission to propel meme coins into the future. We're crafting an ecosystem that celebrates the fun, excitement, and camaraderie of the meme community, while also unlocking the incredible potential of AI-assisted technology.</p>
                                <p className="font-size-sm-120 font-size-xl-130 font-size-xxl-140 text-white mb-3">Get ready to embark on an epic journey with Hype, and be a part of the HYPER Token movement! Together, let's make history and etch our names in the annals of meme coin greatness.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-stretch">
                        <div className="col-lg-4 px-xl-3 mb-4 mb-lg-0">
                            <div className="h-100 bg-color-3 p-4" style={{"borderRadius":"20px"}}>
                                <p className="text-center montreuxjs-xbd text-color-1 font-size-130 font-size-md-140 mb-4">phase 1:<br/> meme fiesta</p>

                                <ul className="text-color-1 mb-0">
                                    <li className="font-size-120 mb-2">Blast off! 🚀</li>
                                    <li className="font-size-120 mb-2">CoinGecko/ CoinMarketCap invasion</li>
                                    <li className="font-size-120 mb-2">1,000+ Meme Aficionados</li>
                                    <li className="font-size-120 mb-2">Unleash $HYPER on Twitter wih meme magic</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 px-xl-3 mb-4 mb-lg-0">
                            <div className="h-100 bg-color-3 p-4" style={{"borderRadius":"20px"}}>
                                <p className="text-center montreuxjs-xbd text-color-1 font-size-130 font-size-md-140 mb-4">phase 2:<br/> chill, hodl &amp; groove</p>

                                <ul className="text-color-1 mb-0">
                                    <li className="font-size-120 mb-2">BFF with PEPE and TURBO</li>
                                    <li className="font-size-120 mb-2">CEX conquest</li>
                                    <li className="font-size-120 mb-2">10,000+ Meme Believers</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 px-xl-3">
                            <div className="h-100 bg-color-3 p-4" style={{"borderRadius":"20px"}}>
                                <p className="text-center montreuxjs-xbd text-color-1 font-size-130 font-size-md-140 mb-4">phase 3:<br/> meme domination</p>

                                <ul className="text-color-1 mb-0">
                                    <li className="font-size-120 mb-2">Tier 1 exchange domination</li>
                                    <li className="font-size-120 mb-2">100,000+ Meme Warriors</li>
                                    <li className="font-size-120 mb-2">The Great Meme Takeover</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-3 py-5 position-relative">
                <div className="position-absolute invisible" id="contact" style={{"top":"-102px"}}></div>

                <div className="container py-5">
                    <h2 className="text-center text-md-start bangers text-color-1 font-size-260 font-size-sm-270 font-size-lg-270 font-size-xl-330 mb-3 mb-lg-0">CONTACT</h2>

                    <div className="row align-items-center py-4 py-md-5 py-xl-3">
                        <div className="col-md-6 order-1 order-md-0">
                            <p className="text-center text-md-start text-color-1 font-size-sm-120 font-size-xl-130 font-size-xxl-140 mb-3">Got questions or need help? Contact us:</p>
                            <p className="text-center text-md-start text-color-1 font-size-sm-120 font-size-xl-130 font-size-xxl-140 mb-3">Email: <a href="mailto:support@hypertokenmeme.vip" className="montreuxjs-xbd link-color-1">support@hypertokenmeme.vip</a></p>
                            <p className="text-center text-md-start text-color-1 font-size-sm-120 font-size-xl-130 font-size-xxl-140 mb-3">Twitter: <a href="https://twitter.com/HyperTokenMeme" target="_blank" rel="noreferrer" className="montreuxjs-xbd link-color-1">@HyperTokenMeme</a></p>
                            <p className="text-center text-md-start text-color-1 font-size-sm-120 font-size-xl-130 font-size-xxl-140 mb-3">Telegram: <a href="https://t.me/HyperTokenMeme" target="_blank" rel="noreferrer" className="montreuxjs-xbd link-color-1">https://t.me/HyperTokenMeme</a></p>
                            <p className="text-center text-md-start text-color-1 font-size-sm-120 font-size-xl-130 font-size-xxl-140 mb-5 pb-4" style={{"wordBreak":"break-word"}}>Find contract info here:<br/> <a href="https://etherscan.io/token/0x54d8517985e74d5708fe45621c8e945c9e4218b9" target="_blank" rel="noreferrer" className="font-size-90 link-color-1">0x54d8517985e74d5708fe45621c8e945c9e4218b9</a></p>

                            <div className="row justify-content-center justify-content-md-start">
                                <div className="col-10 col-sm-7 col-md-11 col-lg-12 col-xl-11 col-xxl-10">
                                    <div className="row justify-content-center justify-content-md-start">
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://twitter.com/HyperTokenMeme" target="_blank" rel="noreferrer">
                                                <img src={twitter} className="w-100" alt="twitter" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-lg-3 px-3 px-lg-3 px-xl-4">
                                            <a href="https://t.me/HyperTokenMeme" target="_blank" rel="noreferrer">
                                                <img src={telegram} className="w-100" alt="telegram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 order-0 order-md-1">
                            <div className="row justify-content-center mb-5 mb-md-0">
                                <div className="col-10 col-sm-9 col-md-10">
                                    <img src={icon} alt="HYPER Token" className="w-100" style={{"transform":"scaleX(-1)"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-color-1 py-5" id="roadmap">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-11 col-xl-10">
                            <p className="text-center text-white font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-4">Hyper Token, the meme-fueled juggernaut, is all about keeping it simple, fair, and engaging with the community. With decentralization, fairness, and the community at its core, HYPER aims to build an all-inclusive playground for sustainable growth, innovation, and holder satisfaction.</p>
                            <p className="text-center text-white font-size-130 font-size-sm-140 font-size-md-120 font-size-lg-160 font-size-xl-180 line-height-120 mb-0">$HYPER is your go-to meme coin with zero intrinsic value or promises of financial gains. No team, no roadmap, just pure fun.<br/> It;s utterly useless and purely for entertainment,<br /> so buckle up and enjoy the ride!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home