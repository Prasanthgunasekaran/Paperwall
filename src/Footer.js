import React from 'react';
import './Footer.scss';
import Twitter from './image/Twitter.png';
import FaceBook from './image/Facebook.png';
import Instagram from './image/Instagram.png';
import LinkedIn from './image/Linkedin.png';
import Locationicon from './image/Location.png';
import callicon from './image/Call.png';
import Emailicon from './image/Email.png';
import FooterPlatstore from './image/FooterPlaystore.png';

function Footer() {
    return (
        <div>
            <div className='Footer'>
                <div className='footerimg'>
                    <div className='Footerlogoname'>
                        <h5>Paper<span>wall</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore dolore<br />magna aliqua.</p>
                        <div className='footermedialogo'>
                            <img src={Twitter} alt='Twitter' />
                            <img src={FaceBook} alt='FaceBook' />
                            <img src={Instagram} alt='Instagaram' />
                            <img src={LinkedIn} alt='LinkedIn' />
                        </div>
                        <div className='footerinput'>
                            <label>Subscribe for our Newsletter</label>
                            <div className='footerinputbtn'>
                                <input placeholder='Enter Your email address' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className='footerhome'>
                        <span>Useful Links</span>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>FQA</p>
                        <p>Contact Us</p>
                        <p>Careers</p>
                    </div>

                    <div className='footerterms'>
                        <span>Dealership</span>
                        <p>Installer Price Calculator</p>
                        <p>Refund Policies</p>
                        <p>E-Catalouge</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policies</p>
                    </div>
                    <div className='footercontact'>
                        <span>Customer Support</span>
                        <p><img src={Locationicon} alt='Loaction' />115/A, Pycraft Garden Road, Nungambakkam,<br />
                            Chennai - 600 034, Tamil Nadu.</p>
                        <p><img src={callicon} alt='Call' />+91 56846 28126</p>
                        <p><img src={Emailicon} alt='Email' />support@gmail.com</p>
                        <div className='footerapplink'>
                            <p>Download Our App</p>
                            <img src={FooterPlatstore} alt='PlayStore' />
                        </div>
                    </div>

                </div>
                <div className='hrtag'>
                    <hr />
                </div>
                <div className='Copyryts'>
                    <p>&copy;2022 company name. All Rights Reserved.</p>
    

                </div>
            </div>
        </div>
    )
}

export default Footer
