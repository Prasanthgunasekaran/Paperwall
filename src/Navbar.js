import React from 'react';
import './Navbar.scss';
import Needhelp from './icon/needhelpicon.svg';
import Flag from './icon/flag.svg'; 
import Cart from './icon/shopping_cart.svg';
import Categories from './icon/Categories.svg';
import Cutomized from './icon/Cutomized.svg';
import Wallpaper from './icon/wallpaper.svg';
import Stickers from './icon/Sticker.svg';
import Artificialgrass from './icon/artificialgrass.svg';
import RoomVisualizer from './icon/Room-Visualizer.svg';
import Ecatalouge from './icon/E-Catalouge.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* Navbar */}
            <div className='navhead' >
                <div className='logo'>
                    <div className='logoname'>
                        <h5>Paper<span>wall</span></h5>
                    </div>
                    <div className='inputname'>
                        <input className='iconse' placeholder='Search for art, kids, abstract wallpapers' />
                    </div>
                    <div className='customer'>
                        <img src={Needhelp} alt='Needhelp' />
                    </div>
                    <div className='flagicon '>
                        <img src={Flag} alt='flag' />
                        <select className='sele'>
                            <option>EN</option>
                        </select>
                    </div>
                    <div className='carticon'>
                        <img src={Cart} alt='cart' />
                    </div>
                    <div className='loginbtn'>
                        <button>Login</button>
                    </div>
                </div>
                <div className='hrtag'><hr /></div>

                {/* Navbar2 */}
                <div className='logo2'>
                    <div className='looo'>
                        <Link to='/categorie'><img src={Categories} alt='Categories' /></Link>
                        <p>Categories</p>
                    </div>
                    <div className='looo'>
                        <img src={Cutomized} alt='Categories' />
                        <p>Cutomized</p>
                    </div>
                    <div className='looo'>
                        <img src={Wallpaper} alt='Categories' />
                        <p>Wallpaper</p>
                    </div>
                    <div className='looo'>
                        <img src={Stickers} alt='Categories' />
                        <p>Stickers</p>
                    </div>
                    <div className='looo'>
                        <img src={Artificialgrass} alt='Categories' />
                        <p>Artificial Grass</p>
                    </div>
                    <div className='looo'>
                        <img src={RoomVisualizer} alt='Categories' />
                        <p>Room Visualizer</p>
                    </div>
                    <div className='looo'>
                        <img src={Ecatalouge} alt='Categories' />
                        <p>E-Catalouge</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
