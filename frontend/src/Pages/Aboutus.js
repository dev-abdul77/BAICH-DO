import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import MainNavigation from "../Components/MainNavigation";
function Aboutuspage()
{
    const backgroundImageUrl = 'images/hero-bg.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const bgurl='aboutusimages/abt.png';
  const secStyle = {
    backgroundImage: `url(${bgurl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
return (<>
<MainNavigation></MainNavigation>
  {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }
   
    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="aboutusimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="aboutusimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="aboutusimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="aboutusimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="aboutusimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="aboutusimages/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Comics Book</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="btn-wrapper text-center">
                    <a href="#0" class="custom-button"><span>Checkout</span></a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="hero-section">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>About Us</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section class="about-section">
        <div class="container">
            <div class="about-wrapper mt--100 mt-lg--440 padding-top">
                <div class="row">
                    <div class="col-lg-7 col-xl-6">
                        <div class="about-content">
                            <h4 class="subtitle" data-aos="fade-down" data-aos-duration="1000">About Us</h4>
                            <h2 class="title" data-aos="fade-down" data-aos-duration="1200"><span class="d-block">OVER 60</span> YEARS EXPERIENCE</h2>
                            <p class="gra" data-aos="fade-down" data-aos-duration="1300">Innovation have made us leaders in auctions platform</p>
                            <div class="item-area" data-aos="fade-down" data-aos-duration="1600">
                                <div class="item">
                                    <div class="thumb">
                                        <img src="aboutusimages/01.png" alt="about"/>
                                    </div>
                                    <p>award-winning team</p>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <img src="aboutusimages/02.png" alt="about"/>
                                    </div>
                                    <p>AFFILIATIONS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-thumb">
                    <img src="aboutusimages/about.png" alt="about"/>
                </div>
            </div>
        </div>
    </section>
    
    <div class="counter-section padding-top mt--10">
        <div class="container">
            <div class="row justify-content-center mb-30-none">
                <div class="col-sm-6 col-lg-3">
                    <div style={{border: "1px solid #ccc", borderRadius: "5vh",textAlign:"center", padding: "7vh", margin: "auto"}}>
                        <h3 style={{margin:"0",fontSize:"2em",fontWeight:"bold"}}>
                            <span class="">62</span><span class="">M</span>
                        </h3>
                        <p>ITEMS AUCTIONED</p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div style={{border: "1px solid #ccc", borderRadius: "5vh",textAlign:"center", padding: "7vh", margin: "auto"}}>
                        <h3 style={{margin:"0",fontSize:"2em",fontWeight:"bold"}}>
                            <span class="">62</span><span class="">M</span>
                        </h3>
                        <p>IN SECURE BIDS</p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div style={{border: "1px solid #ccc", borderRadius: "5vh",textAlign:"center", padding: "7vh", margin: "auto"}}>
                        <h3 style={{margin:"0",fontSize:"2em",fontWeight:"bold"}}>
                            <span class="">62</span><span class="">M</span>
                        </h3>
                        <p>IN SECURE BIDS</p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div style={{border: "1px solid #ccc", borderRadius: "5vh",textAlign:"center", padding: "7vh", margin: "auto"}}>
                        <h3 style={{margin:"0",fontSize:"2em",fontWeight:"bold"}}>
                            <span class="">5</span><span class="">K</span>
                        </h3>
                        <p>AUCTION EXPERTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section class="overview-section padding-top">
        <div class="container mw-lg-100 p-lg-0">
            <div class="row m-0">
                <div class="col-lg-6 p-0">
                    <div class="overview-content">
                        <div class="section-header text-lg-left" data-aos="zoom-out-down" data-aos-duration="1000">
                            <h2 class="title">What can you expect?</h2>
                            <p>Access a diverse range of items with competitive bidding, all from the convenience of your home. Secure transactions and real-time updates ensure a seamless auction experience.</p>
                        </div>
                        <div class="row mb--50">
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/01_1.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Real-time Auction</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/02_1.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Supports Multiple Currency</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/03.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Winner Announcement</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/04.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Supports Multiple Currency</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/05.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Show all bidders history</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="expert-item">
                                    <div class="thumb">
                                        <img src="aboutusimages/06.png" alt="overview"/>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">Add to watchlist</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pl-30 pr-0">
                    
                    <div class="w-100 h-100 " style={secStyle}></div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="call-in-section padding-top padding-bottom">
        <div class="container">
            <div class="call-wrapper cl-white " style={sectionStyle}>
                <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                    <h3 class="title">Register for Free &amp; Start Bidding Now!</h3>
                    <p>From cars to diamonds to iPhones, we have it all.</p>
                </div>
                <a href="#0" class="custom-button white">Register</a>
            </div>
        </div>
    </section>
    <section class="team-section section-bg padding-top padding-bottom">
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">Meet the Management Team</h2>
                <p>Our team consists of passionate and talented individuals invested in your success.</p>
            </div>
            <div class="team-wrapper row justify-content-between">
                <div class="team-item" data-aos="zoom-out-up" data-aos-duration="1100">
                    <div class="team-inner">
                        <div class="team-thumb">
                            <a href="#0">
                                <img src="aboutusimages/team1.png" alt="team"/>
                            </a>
                        </div>
                        <div class="team-content">
                            <h6 class="title"><a href="#0">Abdul Wahab</a></h6>
                            <ul class="social">
                                <li>
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-item" data-aos="zoom-out-up" data-aos-duration="1200">
                    <div class="team-inner">
                        <div class="team-thumb">
                            <a href="#0">
                                <img src="aboutusimages/team3.png" alt="team"/>
                            </a>
                        </div>
                        <div class="team-content">
                            <h6 class="title"><a href="#0">Esha Ashfaq</a></h6>
                            <ul class="social">
                                <li>
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-item" data-aos="zoom-out-up" data-aos-duration="1300">
                    <div class="team-inner">
                        <div class="team-thumb">
                            <a href="#0">
                                <img src="aboutusimages/team2.png" alt="team"/>
                            </a>
                        </div>
                        <div class="team-content">
                            <h6 class="title"><a href="#0">Muhammad Ali</a></h6>
                            <ul class="social">
                                <li>
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-item" data-aos="zoom-out-up" data-aos-duration="1400">
                    <div class="team-inner">
                        <div class="team-thumb">
                            <a href="#0">
                                <img src="aboutusimages/team4.png" alt="team"/>
                            </a>
                        </div>
                        <div class="team-content">
                            <h6 class="title"><a href="#0">Muskan Fatima</a></h6>
                            <ul class="social">
                                <li>
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="team-item" data-aos="zoom-out-up" data-aos-duration="1500">
                    <div class="team-inner">
                        <div class="team-thumb">
                            <a href="#0">
                                <img src="aboutusimages/team1.png" alt="team"/>
                            </a>
                        </div>
                        <div class="team-content">
                            <h6 class="title"><a href="#0"> Faizan</a></h6>
                            <ul class="social">
                                <li>
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="client-section padding-top padding-bottom">
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">Don’t just take our word for it!</h2>
                <p>Our hard work is paying off. Great reviews from amazing customers.</p>
            </div>
        </div>
    </section>
    
</>
)
}
export default Aboutuspage;