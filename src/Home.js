import React from 'react';
import './Home.scss';
import bgdotted from './assets/icon/bgdotted.svg';
import CutomizedWallpapers from './assets/icon/Customized-Wallpapers.svg';
import NormalWallpapers from './assets/icon/Normal-wallpaper.svg';
import StickerWallpapers from './assets/icon/sticker-wallpaper.svg';
import BgMsgIcon from './assets/image/BgMsgIcon.png';
import GroupImg from './assets/image/Groupimg.png';
import BS1 from './assets/image/B-1.png';
import CartImage from './assets/image/Heart_cart.png';
import BS2 from './assets/image/B-2.png';
import BS3 from './assets/image/B-3.png';
import BS4 from './assets/image/B-4.png';
import AR1 from './assets/image/A-1.png';
import AR2 from './assets/image/A-2.png';
import AR3 from './assets/image/A-3.png';
import MP1 from './assets/image/M-P-1.png';
import MP2 from './assets/image/M-P-2.png';
import MP3 from './assets/image/M-P-3.png';
import MP4 from './assets/image/M-P-4.png';
import NA1 from './assets/image/N-A-1.png';
import NA2 from './assets/image/N-A-2.png';
import NA3 from './assets/image/N-A-3.png';
import NA4 from './assets/image/N-A-4.png';
import playstoreicon from './assets/image/PlayStoreImg.png';
import Barcodeicon from './assets/image/BarcodeImg.png';
import RoomVisualizerfooter1 from './assets/image/Room-Visualizer-1.png';
import RoomVisualizerfooter2 from './assets/image/Room-Visualizer-2.png';
import ViewCatalouge from './assets/image/View-Catalouge.png';
import EC1 from './assets/image/E-C-1.png';
import EC2 from './assets/image/E-C-2.png';
import EC3 from './assets/image/E-C-3.png';
import EC4 from './assets/image/E-C-4.png';
import EC5 from './assets/image/E-C-5.png';
import LB1 from './assets/image/L-B-1.png';
import LB2 from './assets/image/L-B-2.png';
import LB3 from './assets/image/L-B-3.png';
import LB4 from './assets/image/L-B-4.png';
import TM1 from './assets/image/Test-P-1.png';
import TM2 from './assets/image/Test-P-2.png';
import TM3 from './assets/image/Test-P-3.png';
import Navbar from './Navbar';
import Footer from './Footer';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Homepage() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // };
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* BackGround */}

            <div className='background'>
                <div className='bgname'>
                    <h5>Paper<span>wall</span></h5>
                    <h6>An Stylish and most beautiful Wallpapers </h6>
                    <img src={bgdotted} alt='bgdotted' />
                </div>
            </div>

            <div className='bgimgoverlay'>
                <div className='bgbox'>
                    <img src={CutomizedWallpapers} alt='CutomizedWallpapers' />
                    <h5>Cutomized Wallpapers</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor </p>
                    <button>Shop Now</button>
                </div>
                <div className='bgbox'>
                    <img src={NormalWallpapers} alt='NormalWallpapers' />
                    <h5>Normal Wallpapers</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor </p>
                    <button>Shop Now</button>
                </div>
                <div className='bgbox'>
                    <img src={StickerWallpapers} alt='StickerWallpapers' />
                    <h5>Sticker Wallpapers</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor </p>
                    <button className='shopbtn'>Shop Now</button>
                    <div className='bgMsgIcon'>
                        <img src={BgMsgIcon} alt='bgmsgicon' />
                    </div>
                </div>
            </div>

            {/* GroupImg */}
            <div className='groupimg'>
                <img src={GroupImg} alt='GroupImg' />
            </div>

            {/* Best Seller */}
            <div className='heading' >
                <p>Best Sellers </p>
                <span>VIEW ALL</span>
            </div>
            <div className='bestSeller'>
                <div className='bestsellerbox'>
                    <img src={BS1} alt='B-S-1' />
                    <h6>Bharat, Rich Indian Wallpaper <br />Design</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4000/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                    <div className='cartImg'>
                        <img src={CartImage} alt='cartImg' />
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={BS2} alt='B-S-2' />
                    <h6>Vincent Van Gough Almond <br />Blossom Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>3500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={BS3} alt='B-S-3' />
                    <h6>Banaras, Indian Carpet Design <br /> Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={BS4} alt='B-S-4' />
                    <h6>A Story by the Garden <br />Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
            </div>

            {/* Artificial Grass */}
            <div className='bgArtgrass'>
                <div className='heading' >
                    <p>Artificial Grass </p>
                    <span>VIEW ALL</span>
                </div>
                <div className='Artgrass'>
                    <p>The art of green space for luxury interiors are mostly planned by using our quality artificial artificial grass in large sectors of corporate industry, residences , commercial shops and other<br /> decorative elements. Some designers used to hung in walls to give a pleasant wall finish to their customers.</p>
                </div>
                <div className='ArtgrassImg'>
                    <div className='Artgrassbox'>
                        <img src={AR1} alt='A-R-1' />
                        <h6>A Story by the Garden <br />Vertical Gardens</h6>
                        <div className='pricetxt'>
                            <p><span>₹</span>3500/Roll</p>
                            <p>Include Tax  | Free Shipping</p>
                        </div>
                    </div>
                    <div className='Artgrassbox'>
                        <img src={AR2} alt='A-R-2' />
                        <h6>Indoor Mats - Non UV</h6>
                        <div className='pricetxt'>
                            <p><span>₹</span>3500/Roll</p>
                            <p>Include Tax  | Free Shipping</p>
                        </div>
                    </div>
                    <div className='Artgrassbox'>
                        <img src={AR3} alt='A-R-3' />
                        <h6>Outdoor Mats - UV Protect</h6>
                        <div className='pricetxt'>
                            <p><span>₹</span>3500/Roll</p>
                            <p>Include Tax  | Free Shipping</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Most Popular Wallpapers */}
            <div className='heading' >
                <p>Most Popular Wallpapers </p>
                <span>VIEW ALL</span>
            </div>
            <div className='bestSeller'>
                <div className='bestsellerbox'>
                    <img src={MP1} alt='M-P-1' />
                    <h6>Bharat, Rich Indian Wallpaper <br />Design</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4000/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                    <div className='cartImg'>
                        <img src={CartImage} alt='cartImg' />
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={MP2} alt='M-P-2' />
                    <h6>Vincent Van Gough Almond <br />Blossom Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>3500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={MP3} alt='M-P-3' />
                    <h6>Banaras, Indian Carpet Design <br /> Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={MP4} alt='M-P-4' />
                    <h6>A Story by the Garden <br />Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
            </div>

            {/* New Arrivals */}
            <div className='heading' >
                <p>New Arrivals </p>
                <span>VIEW ALL</span>
            </div>
            <div className='bestSeller'>
                <div className='bestsellerbox'>
                    <img src={NA1} alt='N-A-1' />
                    <h6>Bharat, Rich Indian Wallpaper <br />Design</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4000/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                    <div className='cartImg'>
                        <img src={CartImage} alt='cartImg' />
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={NA2} alt='N-A-2' />
                    <h6>Vincent Van Gough Almond <br />Blossom Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>3500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={NA3} alt='N-A-3' />
                    <h6>Banaras, Indian Carpet Design <br /> Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
                <div className='bestsellerbox'>
                    <img src={NA4} alt='N-A-4' />
                    <h6>A Story by the Garden <br />Wallpaper</h6>
                    <div className='pricetxt'>
                        <p><span>₹</span>4500/Roll</p>
                        <p>Include Tax  | Free Shipping</p>
                    </div>
                </div>
            </div>

            {/* Room Page */}
            <div className='roombg'>
                <div className='roomhead'>
                    <div className='roomtitle'>
                        <b>Room Visualizer</b>
                        <p>Take inspiration to the next level with Room Visualizer<br />
                            Reinvent your room with new wallpaper using virtual design tool. Snap a <br /> photo of your room and select the options in wallpaper in seconds. </p>
                        <button>Try Now</button><br />
                        <div className='playstoreicon'>
                            <img src={playstoreicon} alt='playstoreicon' />
                            <span>Or</span>
                            <img src={Barcodeicon} alt='Barcodeicon' />
                        </div>
                        <span className='roomscanQr'>Scan QR</span>
                    </div>
                    <div className='roomimg'>
                        <img src={RoomVisualizerfooter1} alt='RoomVisualizerfooter1' />
                        <img className='RoomVisualizerfooter2' src={RoomVisualizerfooter2} alt='RoomVisualizerfooter2' />
                    </div>
                </div>
            </div>

            {/* E-Catalouge */}
            <div className='heading' >
                <p>E-Catalouge </p>
                <span>VIEW ALL</span>
            </div>
            <div className='Ecatlog'>
                <div className='Ecatlogbox'>
                    <img src={EC1} alt='E-C-1' />
                    <h6>My Home. My Space</h6>
                    <div className='EcTxt'>
                        <img src={ViewCatalouge} alt='ViewCatalouge' />
                    </div>
                </div>
                <div className='Ecatlogbox'>
                    <img src={EC2} alt='E-C-2' />
                    <h6>Trendy Walls</h6>
                    <div className='EcTxt'>
                        <img src={ViewCatalouge} alt='ViewCatalouge' />
                    </div>
                </div>
                <div className='Ecatlogbox'>
                    <img src={EC3} alt='E-C-3' />
                    <h6>The Art of Inspiration</h6>
                    <div className='EcTxt'>
                        <img src={ViewCatalouge} alt='ViewCatalouge' />
                    </div>
                </div>
                <div className='Ecatlogbox'>
                    <img src={EC4} alt='E-C-4' />
                    <h6>Best of Living Walls</h6>
                    <div className='EcTxt'>
                        <img src={ViewCatalouge} alt='ViewCatalouge' />
                    </div>
                </div>
                <div className='Ecatlogbox'>
                    <img src={EC5} alt='E-C-5' />
                    <h6>The Art of Gravure</h6>
                    <div className='EcTxt'>
                        <img src={ViewCatalouge} alt='ViewCatalouge' />
                    </div>
                </div>
            </div>

            {/* Latest-Blog */}
            <div className='heading' >
                <p>Latest-Blog </p>
                <span>VIEW ALL</span>
            </div>
            <div className='Lblog'>
                <div className='Lblogbox'>
                    <div className='Lblogbox1'>
                        <img src={LB1} alt='L-B-1' />
                        <img src={LB2} alt='L-B-2' />
                    </div>
                    <div className='LbTxt'>
                        <span>11.10.2022</span>
                        <h6>Trending Wallpaper Designs for<br /> Dining Room by E...</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing sed do eiusmod tempor </p>
                    </div>
                </div>
                <div className='Lblogbox'>
                    <img src={LB3} alt='L-B-3' />
                    <div className='LbTxt'>
                        <span>11.10.2022</span>
                        <h6>How to Decide Between Hardwood<br /> and Laminate Flo...</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing sed do eiusmod tempor </p>
                    </div>
                </div>
                <div className='Lblogbox'>
                    <img src={LB4} alt='L-B-4' />
                    <div className='LbTxt'>
                        <span>11.10.2022</span>
                        <h6>Wallpapers or Murals: Pick the Best<br /> for Your Be...</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing sed do eiusmod tempor </p>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className='heading' >
                <p>Testimonials </p>
            </div>
            <div className='Testimonials'>
                <div className='Testbox'>
                    <img src={TM1} alt='T-M-1' />
                    <div className='TmTxt'>
                        <h4>James Pradip</h4>
                        <span>Bangalore</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='Testbox'>
                    <img src={TM2} alt='T-M-2' />
                    <div className='TmTxt'>
                        <h4>James Pradip</h4>
                        <span>Bangalore</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='Testbox'>
                    <img src={TM3} alt='T-M-2' />
                    <div className='TmTxt'>
                        <h4>James Pradip</h4>
                        <span>Bangalore</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>


            {/* <div className="slider-container">
                <Slider {...settings}>
                    <div className='Testbox'>
                        <img src={TM1} alt='T-M-1' />
                        <div className='TmTxt'>
                            <h4>James Pradip</h4>
                            <span>Bangalore</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='Testbox'>
                        <img src={TM2} alt='T-M-2' />
                        <div className='TmTxt'>
                            <h4>James Pradip</h4>
                            <span>Bangalore</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='Testbox'>
                        <img src={TM3} alt='T-M-2' />
                        <div className='TmTxt'>
                            <h4>James Pradip</h4>
                            <span>Bangalore</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                     <div >
                        <h4>4</h4>
                    </div> 
                </Slider>
    </div> */}


            {/* footer */}
            <Footer />
        </div>
    )
}

export default Homepage;