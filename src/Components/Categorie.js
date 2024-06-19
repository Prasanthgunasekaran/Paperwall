import React from 'react';
import './Categorie.scss';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BgMsgIcon from '../Components/assets/image/BgMsgIcon.png';
import DW1 from '../Components/assets/image/D-W-1.png';
import DW2 from '../Components/assets/image/D-W-2.png';
import DW3 from '../Components/assets/image/D-W-3.png';
import DW4 from '../Components/assets/image/D-W-4.png';
import DW5 from '../Components/assets/image/D-W-5.png';
import DW6 from '../Components/assets/image/D-W-6.png';
import DW7 from '../Components/assets/image/D-W-7.png';
import DW8 from '../Components/assets/image/D-W-8.png';
import DW9 from '../Components/assets/image/D-W-9.png';
import DW10 from '../Components/assets/image/D-W-10.png';
import DW11 from '../Components/assets/image/D-W-11.png';
import DW12 from '../Components/assets/image/D-W-12.png';
import DW13 from '../Components/assets/image/D-W-13.png';
import DW14 from '../Components/assets/image/D-W-14.png';
import DW15 from '../Components/assets/image/D-W-15.png';
import DW16 from '../Components/assets/image/D-W-16.png';
import { Link } from 'react-router-dom';




function Categorie() {
    return (
        <div>
            <Navbar />
            <div className="bghead">
                <Link to='/' className='bglink'>Home  </Link>
                <span> &gt; Categories</span>

            </div>
            <div className='bgcateimg'>
                <div className='bgcatetext'>
                    <p>Categories</p>
                </div>
            </div>
            <div className='DiscoverNew'>
                Discover What's New
                <img src={BgMsgIcon} alt='Msgicon' />
            </div>
            <div className='Discoverimg'>
                <div className='Discoverbox'>
                    <img src={DW1} alt='D-W-1' />
                    <h5>Abstract</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW2} alt='D-W-2' />
                    <h5>Animal</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW3} alt='D-W-3' />
                    <h5>Botanicals</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW4} alt='D-W-4' />
                    <h5>Brick</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW5} alt='D-W-5' />
                    <h5>Classic</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW6} alt='D-W-6' />
                    <h5>Floral</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW7} alt='D-W-7' />
                    <h5>Kids</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW8} alt='D-W-8' />
                    <h5>Marble</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW9} alt='D-W-9' />
                    <h5>Modern</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW10} alt='D-W-10' />
                    <h5>Nature</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW11} alt='D-W-11' />
                    <h5>Royal</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW12} alt='D-W-12' />
                    <h5>Silk</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW13} alt='D-W-13' />
                    <h5>Stripes</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW14} alt='D-W-14' />
                    <h5>Traditional</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW15} alt='D-W-15' />
                    <h5>Texture</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
                <div className='Discoverbox'>
                    <img src={DW16} alt='D-W-16' />
                    <h5>Wood</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Categorie