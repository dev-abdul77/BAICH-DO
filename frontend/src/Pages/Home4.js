import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
function HomePage4() {
    const backgroundImageUrl = 'Home4images/banner-bg-4.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const backgroundImageUrl2 = 'Home2images/popular-bg.png';
  const sectionStyle2 = {
    backgroundImage: `url(${backgroundImageUrl2})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const backgroundImageUrl3 = 'Home2images/call-bg.png';
  const sectionStyle3 = {
    backgroundImage: `url(${backgroundImageUrl3})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  return (
    <>
     {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }

    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="Home4images/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home4images/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home4images/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home4images/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home4images/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home4images/shop05.jpg" alt="shop"/></a>
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
    <section class="banner-section-4 bg_img oh" style={sectionStyle}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="banner-content cl-white">
                        <h5 class="cate" data-aos="fade-down" data-aos-duration="1000">Enjoy Exclusive</h5>
                        <h1 class="title" data-aos="zoom-out-down" data-aos-duration="1200">
                            Buy Your Car In 
                            <span class="d-xl-block"> Real Time</span>
                            <span class="d-xl-block">Bidding</span>
                        </h1>
                        <p class="mw-500" data-aos="zoom-out-up" data-aos-duration="1300">
                            Thousands of Vehicles for Sale Every Day, We havejust the right one for you.
                        </p>
                        <a href="#0" class="custom-button yellow btn-large" data-aos="fade-down" data-aos-duration="1000">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="fade-right" data-aos-duration="1200">
                    <div class="banner-thumb-4 banner-4update">
                        <a href="#0" class="bid-now"><i class="flaticon-auction"></i><span>Bid Now</span></a>
                        <div class="thums">
                            <img src="Home4images/banner-4.png" alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape d-none d-lg-block bot-0">
            <img src="Home4images/banner-shape-4.png" alt="css"/>
        </div>
    </section>
    <section class="how-section padding-top padding-bottom pos-rel">
        <div class="container">
            <div class="section-header text-lg-left">
                <h2 class="title">How it works</h2>
                <p>Easy 3 steps to win</p>
            </div>
            <div class="row justify-content-center mb--40">
                <div class="col-md-6 col-lg-4">
                    <div class="how-item">
                        <div class="how-thumb" data-aos="zoom-out-up" data-aos-duration="1000">
                            <img src="Home4images/how1.png" alt="how"/>
                        </div>
                        <div class="how-content" data-aos="zoom-out-up" data-aos-duration="1200">
                            <h4 class="title">Sign Up</h4>
                            <p>No Credit Card Required</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="how-item">
                        <div class="how-thumb" data-aos="zoom-out-up" data-aos-duration="1000">
                            <img src="Home4images/how2.png" alt="how"/>
                        </div>
                        <div class="how-content" data-aos="zoom-out-up" data-aos-duration="1200">
                            <h4 class="title">Bid</h4>
                            <p>Bidding is free Only pay if you win</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="how-item">
                        <div class="how-thumb" data-aos="zoom-out-up" data-aos-duration="1000">
                            <img src="Home4images/how3.png" alt="how"/>
                        </div>
                        <div class="how-content" data-aos="zoom-out-up" data-aos-duration="1200">
                            <h4 class="title">Win</h4>
                            <p>Fun - Excitement - Great deals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="car-2 d-none d-lg-block"><img src="Home4images/car2.png" alt="how"/></div>
    </section>
    <section class="car-auction-section padding-bottom pos-rel oh">
        <div class="car-bg"><img src="Home4images/car-bg.png" alt="car"/></div>
        <div class="container">
            <div class="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div class="left d-block">
                    <h2 class="title mb-3">Featured Items</h2>
                    <p>Start winning cars with comfort</p>
                </div>
                <a href="#0" class="normal-button">View All</a>
            </div>
            <div class="row justify-content-center mb-30-none">
                <div class="col-sm-10 col-md-6 col-lg-4">
                    <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div class="auction-thumb">
                            <a href="./product-details.html"><img src="Home4images/auction-1.jpg" alt="car"/></a>
                            <a href="#0" class="rating"><i class="far fa-star"></i></a>
                            <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                        </div>
                        <div class="auction-content">
                            <h6 class="title">
                                <a href="./product-details.html">2018 Hyundai Sonata</a>
                            </h6>
                            <div class="bid-area">
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-money"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Buy Now</div>
                                        <div class="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="countdown-area">
                                <div class="countdown">
                                    <div id="bid_counter26"></div>
                                </div>
                                <span class="total-bids">30 Bids</span>
                            </div>
                            <div class="text-center">
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4">
                    <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div class="auction-thumb">
                            <a href="./product-details.html"><img src="Home4images/auction-2.jpg" alt="car"/></a>
                            <a href="#0" class="rating"><i class="far fa-star"></i></a>
                            <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                        </div>
                        <div class="auction-content">
                            <h6 class="title">
                                <a href="./product-details.html">2018 Nissan Versa, S</a>
                            </h6>
                            <div class="bid-area">
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-money"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Buy Now</div>
                                        <div class="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="countdown-area">
                                <div class="countdown">
                                    <div id="bid_counter27"></div>
                                </div>
                                <span class="total-bids">30 Bids</span>
                            </div>
                            <div class="text-center">
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4">
                    <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div class="auction-thumb">
                            <a href="./product-details.html"><img src="Home4images/auction-3.jpg" alt="car"/></a>
                            <a href="#0" class="rating"><i class="far fa-star"></i></a>
                            <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                        </div>
                        <div class="auction-content">
                            <h6 class="title">
                                <a href="./product-details.html">2018 Honda Accord, Sport</a>
                            </h6>
                            <div class="bid-area">
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-money"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Buy Now</div>
                                        <div class="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="countdown-area">
                                <div class="countdown">
                                    <div id="bid_counter28"></div>
                                </div>
                                <span class="total-bids">30 Bids</span>
                            </div>
                            <div class="text-center">
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="trending-section padding-bottom padding-top">
        <div class="container">
            <div class="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div class="left d-block">
                    <h2 class="title mb-3">Trending Items</h2>
                    <p>Bid on 1,000’s of vehicles from more than 25 countries</p>
                </div>
                <a href="#0" class="normal-button">View All</a>
            </div>
            <div class="row justify-content-center mb-30-none">
                <div class="col-md-6 col-lg-12">
                    <div class="auction-item-6" data-aos="zoom-out-up" data-aos-duration="1200">
                        <div class="auction-inner">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction-1.png" alt="trending"/></a>
                                <a href="#0" class="rating"><i class="far fa-star"></i></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h5 class="title"><a href="./product-details.html">2016 KIA Optima, EX</a></h5>
                                <div class="item-information">
                                    <ul>
                                        <li><span>Number</span>1-38005900</li>
                                        <li><span>VIN</span>2G1WG5EK3B1312245</li>
                                        <li><span>Milage</span> 153k miles (246k km)</li>
                                        <li><span>Location</span>Sandston (VA)</li>
                                    </ul>
                                    <ul>
                                        <li><span>Engine</span>2.0 Diesel</li>
                                        <li><span>Transmission</span>Automated</li>
                                        <li><span>Body</span>Offroad car</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="auction-bidding">
                                <div class="countdown">
                                    <div id="bid_counter3"></div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-12">
                    <div class="auction-item-6" data-aos="zoom-out-up" data-aos-duration="1300">
                        <div class="auction-inner">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction-2.png" alt="trending"/></a>
                                <a href="#0" class="rating"><i class="far fa-star"></i></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h5 class="title"><a href="./product-details.html">2019 Polaris General, 1000 Eps</a></h5>
                                <div class="item-information">
                                    <ul>
                                        <li><span>Number</span>1-38005900</li>
                                        <li><span>VIN</span>2G1WG5EK3B1312245</li>
                                        <li><span>Milage</span> 153k miles (246k km)</li>
                                        <li><span>Location</span>Sandston (VA)</li>
                                    </ul>
                                    <ul>
                                        <li><span>Engine</span>2.0 Diesel</li>
                                        <li><span>Transmission</span>Automated</li>
                                        <li><span>Body</span>Offroad car</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="auction-bidding">
                                <div class="countdown">
                                    <div id="bid_counter4"></div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-12">
                    <div class="auction-item-6" data-aos="zoom-out-up" data-aos-duration="1400">
                        <div class="auction-inner">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction-3.png" alt="trending"/></a>
                                <a href="#0" class="rating"><i class="far fa-star"></i></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h5 class="title"><a href="./product-details.html">2018 Hyundai Elantra, Sel/Value/Limited</a></h5>
                                <div class="item-information">
                                    <ul>
                                        <li><span>Number</span>1-38005900</li>
                                        <li><span>VIN</span>2G1WG5EK3B1312245</li>
                                        <li><span>Milage</span> 153k miles (246k km)</li>
                                        <li><span>Location</span>Sandston (VA)</li>
                                    </ul>
                                    <ul>
                                        <li><span>Engine</span>2.0 Diesel</li>
                                        <li><span>Transmission</span>Automated</li>
                                        <li><span>Body</span>Offroad car</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="auction-bidding">
                                <div class="countdown">
                                    <div id="bid_counter5"></div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-12">
                    <div class="auction-item-6" data-aos="zoom-out-up" data-aos-duration="1500">
                        <div class="auction-inner">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction-4.png" alt="trending"/></a>
                                <a href="#0" class="rating"><i class="far fa-star"></i></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h5 class="title"><a href="./product-details.html">2018 Toyota Camry, L/Le/Xle/Se/Xse</a></h5>
                                <div class="item-information">
                                    <ul>
                                        <li><span>Number</span>1-38005900</li>
                                        <li><span>VIN</span>2G1WG5EK3B1312245</li>
                                        <li><span>Milage</span> 153k miles (246k km)</li>
                                        <li><span>Location</span>Sandston (VA)</li>
                                    </ul>
                                    <ul>
                                        <li><span>Engine</span>2.0 Diesel</li>
                                        <li><span>Transmission</span>Automated</li>
                                        <li><span>Body</span>Offroad car</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="auction-bidding">
                                <div class="countdown">
                                    <div id="bid_counter6"></div>
                                </div>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                                <a href="#0" class="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ending-auction padding-top pos-rel">
        <div class="popular-bg bg_img" style={sectionStyle2}></div>
        <div class="container">
            <div class="section-header cl-white">
                <span class="cate">Closing Within 24 Hours</span>
                <h2 class="title">Auctions Ending soon</h2>
                <p>Bid and win great deals,Our auction process is simple, efficient, and transparent.</p>
            </div>
            <div class="popular-auction-wrapper">
                <div class="row justify-content-center mb-40-none">
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction01.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2024 Honda Insight, 
                                        Touring</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction02.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2011 Hyundai Sonata,
                                        Se/Limited</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction03.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2016 Dodge Grand
                                        Caravan, Sxt</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction04.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2009 Jeep Wrangler
                                        Unlimite, Sahara</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction05.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2009 Toyota Prius
                                        (Medford, NY 11763)</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="auction-item-3" data-aos="zoom-out-up" data-aos-duration="800">
                            <div class="auction-thumb">
                                <a href="./product-details.html"><img src="Home4images/auction06.png" alt="ending"/></a>
                                <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                            </div>
                            <div class="auction-content">
                                <h6 class="title">
                                    <a href="./product-details.html">2019 Indian Motorcycle
                                        Co. Scout, Bobber</a>
                                </h6>
                                <div class="bid-amount">
                                    <div class="icon">
                                        <i class="flaticon-auction"></i>
                                    </div>
                                    <div class="amount-content">
                                        <div class="current">Current Bid</div>
                                        <div class="amount">$876.00</div>
                                    </div>
                                </div>
                                <div class="bids-area">
                                    Total Bids : <span class="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="load-wrapper">
                    <a href="#0" class="normal-button">See All Auction</a>
                </div>
            </div>
        </div>
    </section>
    <section class="call-in-section padding-top">
        <div class="container">
            <div class="call-wrapper cl-white bg_img" style={sectionStyle3}>
                <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                    <h3 class="title">Register for Free &amp; Start Bidding Now!</h3>
                    <p>From cars to diamonds to iPhones, we have it all.</p>
                </div>
                <a href="sign-up.html" class="custom-button white">Register</a>
            </div>
        </div>
    </section>
    <section class="client-section padding-top padding-bottom">
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">Don’t just take our word for it!</h2>
                <p>Our hard work is paying off. Great reviews from amazing customers.</p>
            </div>
            <div class="m--15">
                <div class="client-slider owl-theme owl-carousel">
                    <div class="client-item">
                        <div class="client-content">
                            <p>I can't stop bidding! It's a great way to spend some time and I want everything on Sbidu.</p>
                        </div>
                        <div class="client-author">
                            <div class="thumb">
                                <a href="#0">
                                    <img src="Home4images/client01.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0">Alexis Moore</a></h6>
                                <div class="ratings">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="client-item">
                        <div class="client-content">
                            <p>I came I saw I won. Love what I have won, and will try to win something else.</p>
                        </div>
                        <div class="client-author">
                            <div class="thumb">
                                <a href="#0">
                                    <img src="Home4images/client02.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0">Darin Griffin</a></h6>
                                <div class="ratings">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="client-item">
                        <div class="client-content">
                            <p>This was my first time, but it was exciting. I will try it again. Thank you so much.</p>
                        </div>
                        <div class="client-author">
                            <div class="thumb">
                                <a href="#0">
                                    <img src="Home4images/client03.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0">Tom Powell</a></h6>
                                <div class="ratings">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


   
    </>
  );
}

export default HomePage4;