import MainNavigation from "../Components/MainNavigation";
import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
function HomePage1() {
    const backgroundImageUrl = 'images/banner-bg-1.png'; // Replace with the actual path to your image

  const sectionStyle = { // Replace with the actual path to your image
    backgroundImage: `url(images/banner-bg-1.png)`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])
  return (
    <>
    <MainNavigation></MainNavigation>
     {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }

    <div className="cart-sidebar-area">
        <div className="top-content">
            <a href="/" className="logo">
                <img src="homeimages/logo2.png" alt="logo"/>
            </a>
            <span className="side-sidebar-close-btn"><i className="fas fa-times"></i></span>
        </div>
        <div className="bottom-content">
            <div className="cart-products">
                <h4 className="title">Shopping cart</h4>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="homeimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Color Pencil</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="homeimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Water Pot</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="homeimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Art Paper</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="homeimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Stop Watch</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="single-product-item">
                    <div className="thumb">
                        <a href="#0"><img src="homeimages/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div className="content">
                        <h4 className="title"><a href="#0">Comics Book</a></h4>
                        <div className="price"><span className="pprice">$80.00</span> <del className="dprice">$120.00</del></div>
                        <a href="#" className="remove-cart">Remove</a>
                    </div>
                </div>
                <div className="btn-wrapper text-center">
                    <a href="#0" className="custom-button"><span>Checkout</span></a>
                </div>
            </div>
        </div>
    </div>


    <section className="banner-section bg_img" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6">
            <div className="banner-content cl-white">
              <h5 className="cate" data-aos="fade-down" data-aos-duration="1000">Next Generation Auction</h5>
              <h1 className="title" data-aos="zoom-out-up" data-aos-duration="1200">
                <span className="d-xl-block">Find Your</span> Next Deal!
              </h1>
              <p className="pras" data-aos="zoom-out-down" data-aos-duration="1300">
                Online Auction is where everyone goes to shop, sell, and give, while discovering variety and affordability.
              </p>
              <a href="#0" className="custom-button yellow btn-large" data-aos="zoom-out-up" data-aos-duration="1500">
                Get Started
              </a>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6" data-aos="fade-right" data-aos-duration="1200">
            <div className="banner-thumb-2">
              <img src="homeimages/banner-1.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape d-none d-lg-block">
        <img src="homeimages/banner-shape.png" alt="css" />
      </div>
    </section>


    <div className="browse-section ash-bg">
        <div className="browse-slider-section mt--140">
            <div className="container">
                <div className="section-header-2 cl-white mb-4">
                    <div className="left" data-aos="flip-up" data-aos-duration="1500">
                        <h6 className="title pl-0 w-100">Browse the highlights</h6>
                    </div>
                    <div className="slider-nav">
                        <a href="#0" className="bro-prev"><i className="flaticon-left-arrow"></i></a>
                        <a href="#0" className="bro-next active"><i className="flaticon-right-arrow"></i></a>
                    </div>
                </div>
                <div className="m--15">
                    <div className="browse-slider owl-theme owl-carousel">
                        <a href="#0" className="browse-item">
                            <img src="homeimages/01.png" alt="auction"/>
                            <span className="info">Vehicles</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="homeimages/02.png" alt="auction"/>
                            <span className="info">Jewelry</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="homeimages/03.png" alt="auction"/>
                            <span className="info">Watches</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="homeimages/04.png" alt="auction"/>
                            <span className="info">Electronics</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="homeimages/05.png" alt="auction"/>
                            <span className="info">Sports</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="homeimages/06.png" alt="auction"/>
                            <span className="info">Real Estate</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     


        <section className="car-auction-section padding-bottom padding-top pos-rel oh">
            <div className="car-bg"><img src="homeimages/car-bg.png" alt="car"/></div>
            <div className="container">
                <div className="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                    <div className="left">
                        <div className="thumb">
                            <img src="homeimages/car-1.png" alt="header-icons"/>
                        </div>
                        <div className="title-area">
                            <h2 className="title">Vehicles</h2>
                            <p>We offer affordable Vehicles</p>
                        </div>
                    </div>
                    <a href="#0" className="normal-button">View All</a>
                </div>
                <div className="row justify-content-center mb-30-none">
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="2200">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-1_5.jpg" alt="car"/></a>
                                <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">2018 Hyundai Sonata</a>
                                </h6>
                                <div className="bid-area">
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-money"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Buy Now</div>
                                            <div className="amount">$5,00.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="countdown-area">
                                    <div className="countdown">
                                        <div id="bid_counter26"></div>
                                    </div>
                                    <span className="total-bids">30 Bids</span>
                                </div>
                                <div className="text-center">
                                    <a href="#0" className="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1100">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-2.jpg" alt="car"/></a>
                                <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">2018 Nissan Versa, S</a>
                                </h6>
                                <div className="bid-area">
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-money"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Buy Now</div>
                                            <div className="amount">$5,00.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="countdown-area">
                                    <div className="countdown">
                                        <div id="bid_counter27"></div>
                                    </div>
                                    <span className="total-bids">30 Bids</span>
                                </div>
                                <div className="text-center">
                                    <a href="#0" className="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4">
                        <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1200">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-3_4.jpg" alt="car"/></a>
                                <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">2018 Honda Accord, Sport</a>
                                </h6>
                                <div className="bid-area">
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-money"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Buy Now</div>
                                            <div className="amount">$5,00.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="countdown-area">
                                    <div className="countdown">
                                        <div id="bid_counter28"></div>
                                    </div>
                                    <span className="total-bids">30 Bids</span>
                                </div>
                                <div className="text-center">
                                    <a href="#0" className="custom-button">Submit a bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


 
    <section className="jewelry-auction-section padding-bottom padding-top pos-rel">
        <div className="jewelry-bg d-none d-xl-block"><img src="homeimages/jwelry-bg.png" alt="jewelry"/></div>
        <div className="container">
            <div className="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div className="left">
                    <div className="thumb">
                        <img src="homeimages/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">Jewelry</h2>
                        <p>Online jewelry auctions where you can bid now and save money</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="row justify-content-center mb-30-none">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1300">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-1_6.jpg" alt="jewelry"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Gold Ring With Clear Stones</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter23"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1400">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-2_1.jpg" alt="jewelry"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Ring With Clear Stone Accents</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter24"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1500">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-3.jpg" alt="jewelry"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Gold Ring With Clear Stones</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter25"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="call-in-section padding-top pt-max-xl-0">
        <div className="container">
            <div className="call-wrapper cl-white bg_img" style={sectionStyle}>
                <div className="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                    <h3 className="title">Register for Free &amp; Start Bidding Now!</h3>
                    <p>From cars to diamonds to iPhones, we have it all.</p>
                </div>
                <a href="sign-up.html" className="custom-button white">Register</a>
            </div>
        </div>
    </section>



    <section className="watches-auction-section padding-bottom padding-top">
        <div className="container">
            <div className="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div className="left">
                    <div className="thumb">
                        <img src="homeimages/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">Watches</h2>
                        <p>Shop for men &amp; women designer brand watches</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="row justify-content-center mb-30-none">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1600">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-1.jpg" alt="watches"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Vintage Rolex</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter20"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1700">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-2_2.jpg" alt="watches"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Lady’s Vintage Rolex Datejust</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter21"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1800">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-3_1.jpg" alt="watches"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Lady’s Retro Diamond</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter22"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="popular-auction padding-top pos-rel">
        <div className="popular-bg bg_img" style={sectionStyle}></div>
        <div className="container">
            <div className="section-header cl-white" data-aos="fade-down" data-aos-duration="1000">
                <span className="cate">Closing Within 24 Hours</span>
                <h2 className="title" data-aos="fade-down" data-aos-duration="1500">Popular Auctions</h2>
                <p>Bid and win great deals,Our auction process is simple, efficient, and transparent.</p>
            </div>
            <div className="popular-auction-wrapper">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="1500">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-1_1.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">Apple Macbook Pro Laptop</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="900">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-2_3.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">Canon EOS Rebel T6I
                                        Digital Camera</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="1000">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-3_5.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">14k Gold Geneve Watch,
                                        24.5g</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="1200">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-4.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">14K White Gold 185.60
                                        Grams 5.95 Carats</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="1300">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-5.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">2009 Toyota Prius
                                        (Medford, NY 11763)</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="auction-item-3" data-aos="zoom-out-up" data-aos-duration="1400">
                            <div className="auction-thumb">
                                <a href="./product-details.html"><img src="homeimages/auction-6.jpg" alt="popular"/></a>
                                <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <a href="./product-details.html">.6 Gram Pure Gold
                                        Nugget</a>
                                </h6>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bids-area">
                                    Total Bids : <span className="total-bids">130 Bids</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="coins-and-bullion-auction-section padding-bottom padding-top pos-rel pb-max-xl-0">
        <div className="jewelry-bg d-none d-xl-block"><img src="homeimages/coin-bg.png" alt="coin"/></div>
        <div className="container">
            <div className="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div className="left">
                    <div className="thumb">
                        <img src="homeimages/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">Coins &amp; Bullion</h2>
                        <p>Discover rare, foreign, &amp; ancient coins that are worth collecting</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="row justify-content-center mb-30-none">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1900">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-1_2.jpg" alt="coins"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">Ancient &amp; World Coins</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter17"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="2000">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-2_4.jpg" alt="coins"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">2018 Hyundai Sonata</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter18"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="2100">
                        <div className="auction-thumb">
                            <a href="./product-details.html"><img src="homeimages/auction-3_2.jpg" alt="coins"/></a>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                                <a href="./product-details.html">2018 Hyundai Sonata</a>
                            </h6>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-auction"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Current Bid</div>
                                        <div className="amount">$876.00</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Buy Now</div>
                                        <div className="amount">$5,00.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    <div id="bid_counter19"></div>
                                </div>
                                <span className="total-bids">30 Bids</span>
                            </div>
                            <div className="text-center">
                                <a href="#0" className="custom-button">Submit a bid</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="real-estate-auction padding-top padding-bottom pos-rel oh">
        <div className="car-bg"><img src="homeimages/real-bg.png" alt="realstate"/></div>
        <div className="container">
            <div className="section-header-3" data-aos="zoom-out-down" data-aos-duration="1200">
                <div className="left">
                    <div className="thumb">
                        <img src="homeimages/coin-1.png" alt="header-icons"/>
                    </div>
                    <div className="title-area">
                        <h2 className="title">Real Estate</h2>
                        <p>Find auctions for Homes, Condos, Residential &amp; Commercial Properties.</p>
                    </div>
                </div>
                <a href="#0" className="normal-button">View All</a>
            </div>
            <div className="auction-slider-4 owl-theme owl-carousel">
                <div className="auction-item-4">
                    <div className="auction-thumb">
                        <a href="./product-details.html"><img src="homeimages/auction-1.png" alt="realstate"/></a>
                        <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                    </div>
                    <div className="auction-content">
                        <h4 className="title">
                            <a href="./product-details.html">Brand New Apartments In Esenyurt, Istanbul</a>
                        </h4>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Current Bid</div>
                                    <div className="amount">$876.00</div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">$5,00.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter30"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                        </div>
                        <div className="text-center">
                            <a href="#0" className="custom-button">Submit a bid</a>
                        </div>
                    </div>
                </div>
                <div className="auction-item-4">
                    <div className="auction-thumb">
                        <a href="./product-details.html"><img src="homeimages/auction-1.png" alt="realstate"/></a>
                        <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                    </div>
                    <div className="auction-content">
                        <h4 className="title">
                            <a href="./product-details.html">Brand New Apartments In Esenyurt, Istanbul</a>
                        </h4>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Current Bid</div>
                                    <div className="amount">$876.00</div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">$5,00.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter31"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                        </div>
                        <div className="text-center">
                            <a href="#0" className="custom-button">Submit a bid</a>
                        </div>
                    </div>
                </div>
                <div className="auction-item-4">
                    <div className="auction-thumb">
                        <a href="./product-details.html"><img src="homeimages/auction-1.png" alt="realstate"/></a>
                        <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                    </div>
                    <div className="auction-content">
                        <h4 className="title">
                            <a href="./product-details.html">Brand New Apartments In Esenyurt, Istanbul</a>
                        </h4>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Current Bid</div>
                                    <div className="amount">$876.00</div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">$5,00.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter32"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                        </div>
                        <div className="text-center">
                            <a href="#0" className="custom-button">Submit a bid</a>
                        </div>
                    </div>
                </div>
                <div className="auction-item-4">
                    <div className="auction-thumb">
                        <a href="./product-details.html"><img src="homeimages/auction-1.png" alt="realstate"/></a>
                        <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                    </div>
                    <div className="auction-content">
                        <h4 className="title">
                            <a href="./product-details.html">Brand New Apartments In Esenyurt, Istanbul</a>
                        </h4>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Current Bid</div>
                                    <div className="amount">$876.00</div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">$5,00.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter33"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                        </div>
                        <div className="text-center">
                            <a href="#0" className="custom-button">Submit a bid</a>
                        </div>
                    </div>
                </div>
                <div className="auction-item-4">
                    <div className="auction-thumb">
                        <a href="./product-details.html"><img src="homeimages/auction-1.png" alt="realstate"/></a>
                        <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                    </div>
                    <div className="auction-content">
                        <h4 className="title">
                            <a href="./product-details.html">Brand New Apartments In Esenyurt, Istanbul</a>
                        </h4>
                        <div className="bid-area">
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-auction"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Current Bid</div>
                                    <div className="amount">$876.00</div>
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div className="icon">
                                    <i className="flaticon-money"></i>
                                </div>
                                <div className="amount-content">
                                    <div className="current">Buy Now</div>
                                    <div className="amount">$5,00.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="countdown-area">
                            <div className="countdown">
                                <div id="bid_counter34"></div>
                            </div>
                            <span className="total-bids">30 Bids</span>
                        </div>
                        <div className="text-center">
                            <a href="#0" className="custom-button">Submit a bid</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-nav real-style ml-auto">
                <a href="#0" className="real-prev"><i className="flaticon-left-arrow"></i></a>
                <div className="pagination"></div>
                <a href="#0" className="real-next active"><i className="flaticon-right-arrow"></i></a>
            </div>
        </div>
    </section>

    <section className="art-and-electronics-auction-section padding-top">
        <div className="container">
            <div className="row justify-content-center mb--50">
                <div className="col-xl-6 col-lg-8 mb-50">
                    <div className="section-header-2">
                        <div className="left">
                            <div className="thumb">
                                <img src="homeimages/camera-1.png" alt="header-icons"/>
                            </div>
                            <h2 className="title">Electronics</h2>
                        </div>
                        <div className="slider-nav">
                            <a href="#0" className="electro-prev"><i className="flaticon-left-arrow"></i></a>
                            <a href="#0" className="electro-next active"><i className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="auction-slider-1 owl-carousel owl-theme  mb-30-none">
                        <div className="slide-item">
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-1_4.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Magnifying Glasses, Jewelry Loupe odit qui corporis</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter1"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-2_5.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Surveillance WiFi Exterieur, 1080P Camera</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter2"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-3_3.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">WiFi Doorbell Camera for Apartments</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter3"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-4_2.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">GPD Pocket 2 Ultrabook 7" inch</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter4"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-1_4.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Magnifying Glasses, Jewelry Loupe odit qui corporis</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter5"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-2_5.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Surveillance WiFi Exterieur, 1080P Camera</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter6"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-3_3.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">WiFi Doorbell Camera for Apartments</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter7"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-4_2.jpg" alt="electronics"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">GPD Pocket 2 Ultrabook 7" inch</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter8"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 mb-50">
                    <div className="section-header-2">
                        <div className="left">
                            <div className="thumb">
                                <img src="homeimages/art-1.png" alt="header-icons"/>
                            </div>
                            <h2 className="title">Art</h2>
                        </div>
                        <div className="slider-nav">
                            <a href="#0" className="art-prev"><i className="flaticon-left-arrow"></i></a>
                            <a href="#0" className="art-next active"><i className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="auction-slider-2 owl-carousel owl-theme mb-30-none">
                        <div className="slide-item">
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-1_3.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Magnifying Glasses, Jewelry Loupe odit qui corporis</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter9"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-2_6.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Surveillance WiFi Exterieur, 1080P Camera</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter10"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-3_6.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">WiFi Doorbell Camera for Apartments</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter11"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-4_1.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">GPD Pocket 2 Ultrabook 7" inch</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter12"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-item">
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-1_3.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Magnifying Glasses, Jewelry Loupe odit qui corporis</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter13"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-2_6.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">Surveillance WiFi Exterieur, 1080P Camera</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter14"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-3_6.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">WiFi Doorbell Camera for Apartments</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter15"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-item-1">
                                <div className="auction-thumb">
                                    <a href="./product-details.html"><img src="homeimages/auction-4_1.jpg" alt="art"/></a>
                                    <a href="#0" className="rating"><i className="far fa-star"></i></a>
                                    <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                                </div>
                                <div className="auction-content">
                                    <h6 className="title">
                                        <a href="./product-details.html">GPD Pocket 2 Ultrabook 7" inch</a>
                                    </h6>
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Current Bid</div>
                                            <div className="amount">$876.00</div>
                                        </div>
                                    </div>
                                    <div className="countdown-area">
                                        <div className="countdown">
                                            <div id="bid_counter16"></div>
                                        </div>
                                        <span className="total-bids">30 Bids</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="how-section padding-top">
        <div className="container">
            <div className="how-wrapper section-bg">
                <div className="section-header text-lg-left" data-aos="zoom-out-up" data-aos-duration="1200">
                    <h2 className="title">How it works</h2>
                    <p>Easy 3 steps to win</p>
                </div>
                <div className="row justify-content-center mb--40">
                    <div className="col-md-6 col-lg-4">
                        <div className="how-item">
                            <div className="how-thumb" data-aos="zoom-out-up" data-aos-duration="1000">
                                <img src="homeimages/how1.png" alt="how"/>
                            </div>
                            <div className="how-content" data-aos="zoom-out-up" data-aos-duration="1200">
                                <h4 className="title">Sign Up</h4>
                                <p>No Credit Card Required</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="how-item">
                            <div className="how-thumb" data-aos="zoom-out-up" data-aos-duration="1200">
                                <img src="homeimages/how2.png" alt="how"/>
                            </div>
                            <div className="how-content" data-aos="zoom-out-up" data-aos-duration="1400">
                                <h4 className="title">Bid</h4>
                                <p>Bidding is free Only pay if you win</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="how-item">
                            <div className="how-thumb" data-aos="zoom-out-up" data-aos-duration="1400">
                                <img src="homeimages/how3.png" alt="how"/>
                            </div>
                            <div className="how-content" data-aos="zoom-out-up" data-aos-duration="1600">
                                <h4 className="title">Win</h4>
                                <p>Fun - Excitement - Great deals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    



    <section className="client-section padding-top padding-bottom">
        <div className="container">
            <div className="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 className="title">Don’t just take our word for it!</h2>
                <p>Our hard work is paying off. Great reviews from amazing customers.</p>
            </div>
            <div className="m--15">
                <div className="client-slider owl-theme owl-carousel">
                    <div className="client-item">
                        <div className="client-content">
                            <p>I can't stop bidding! It's a great way to spend some time and I want everything on Sbidu.</p>
                        </div>
                        <div className="client-author">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="homeimages/client01.png" alt="client"/>
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="#0">Alexis Moore</a></h6>
                                <div className="ratings">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-content">
                            <p>I came I saw I won. Love what I have won, and will try to win something else.</p>
                        </div>
                        <div className="client-author">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="homeimages/client02.png" alt="client"/>
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="#0">Darin Griffin</a></h6>
                                <div className="ratings">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-item">
                        <div className="client-content">
                            <p>This was my first time, but it was exciting. I will try it again. Thank you so much.</p>
                        </div>
                        <div className="client-author">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="homeimages/client03.png" alt="client"/>
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href="#0">Tom Powell</a></h6>
                                <div className="ratings">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
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

export default HomePage1;
