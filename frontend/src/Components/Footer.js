import {NavLink} from "react-router-dom";
function FooterComponent()
{
    const backgroundImageUrl = '/images/footer-bg.jpg'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
    return(
        <>
        <footer className=" padding-top oh" style={sectionStyle}>
        <div className="footer-top-shape">
            <img src="/homeimages/footer-top-shape.png" alt="css"/>
        </div>
        <div className="anime-wrapper">
            <div className="anime-1 plus-anime">
                <img src="/homeimages/p1.png" alt="footer"/>
            </div>
            <div className="anime-2 plus-anime">
                <img src="/homeimages/p2.png" alt="footer"/>
            </div>
            <div className="anime-3 plus-anime">
                <img src="/homeimages/p3.png" alt="footer"/>
            </div>
            <div className="anime-5 zigzag">
                <img src="/homeimages/c2.png" alt="footer"/>
            </div>
            <div className="anime-6 zigzag">
                <img src="/homeimages/c3.png" alt="footer"/>
            </div>
            <div className="anime-7 zigzag">
                <img src="/homeimages/c4.png" alt="footer"/>
            </div>
        </div>
        <div className="newslater-wrapper">
            <div className="container">
                <div className="newslater-area">
                    <div className="newslater-thumb">
                        <img src="/homeimages/newslater.png" alt="footer"/>
                    </div>
                    <div className="newslater-content">
                        <div className="section-header left-style mb-low" data-aos="fade-down" data-aos-duration="1100">
                            <h5 className="cate">Subscribe to Baich-Do</h5>
                            <h3 className="title">To Get Exclusive Benefits</h3>
                        </div>
                        <form className="subscribe-form">
                            <input type="text" placeholder="Enter Your Email" name="email"/>
                            <button type="submit" className="custom-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-top padding-bottom padding-top">
            <div className="container">
                <div className="row mb--60">
                    <div className="col-sm-6 col-lg-3" data-aos="fade-down" data-aos-duration="1000">
                        <div className="footer-widget widget-links">
                            <h5 className="title">Auction Categories</h5>
                            <ul className="links-list">
                                <li>
                                <NavLink to="/product1">Cars</NavLink>
                                </li>
                                <li>
                                <NavLink to="/product3">Jewelry</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product2">House</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3" data-aos="fade-down" data-aos-duration="1300">
                        <div className="footer-widget widget-links">
                            <h5 className="title">About Us</h5>
                            <ul className="links-list">
                                <li>
                                    <NavLink to="/aboutus">About Baich-Do</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3" data-aos="fade-down" data-aos-duration="1600">
                        <div className="footer-widget widget-links">
                            <h5 className="title">We're Here to Help</h5>
                            <ul className="links-list">
                                <li>
                                    <NavLink to="/userprofile">Your Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contactus">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3" data-aos="fade-down" data-aos-duration="1800">
                        <div className="footer-widget widget-follow">
                            <h5 className="title">Follow Us</h5>
                            <ul className="links-list">
                                <li>
                                    <a href="#0"><i className="fas fa-phone-alt"></i>042-4546754</a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fas fa-blender-phone"></i>0303-0332233</a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fas fa-envelope-open-text"></i><span className="__cf_email__">baichdo@gmail.com</span></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fas fa-location-arrow"></i>Old Anarkali Lahore</a>
                                </li>
                            </ul>
                            <ul className="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/" className="active"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.x.com/"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="copyright-area">
                    <div className="footer-bottom-wrapper">
                        <div className="logo">
                            <a href="/"><img style={{height:100,width:200}} src="/homeimages/14.png" alt="logo"/></a>
                        </div>
                        <ul className="gateway-area">
                            <li>
                                <a href="#0"><img src="/homeimages/paypal.png" alt="footer"/></a>
                            </li>
                            <li>
                                <a href="#0"><img src="/homeimages/visa.png" alt="footer"/></a>
                            </li>
                            <li>
                                <a href="#0"><img src="/homeimages/discover.png" alt="footer"/></a>
                            </li>
                            <li>
                                <a href="#0"><img src="/homeimages/mastercard.png" alt="footer"/></a>
                            </li>
                        </ul>
                        <div className="copyright"><p>© Copyright 2024 | <NavLink to="/">Baich-Do</NavLink> By <a href="#0">Malik Tech</a></p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
   
    
        </>
    )
}
export default FooterComponent;