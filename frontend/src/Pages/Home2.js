import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import MainNavigation from "../Components/MainNavigation";
import axios from "axios";
import { NavLink } from "react-router-dom";
function HomePage2() {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('Home2images/banner-bg-2.png')
    const [backgroundImageUrl1, setBackgroundImageUrl1] = useState('Home2images/howvedio.png')
    const [backgroundImageUrl2, setBackgroundImageUrl2] = useState('Home2images/howvedio.png')
    const [backgroundImageUrl3, setBackgroundImageUrl3] = useState('Home2images/call-bg.png')
    const [backgroundImageUrl4, setBackgroundImageUrl4] = useState('Home2images/featured-bg-1.jpg')
  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  }
  const sectionStyle1 = {
    backgroundImage: `url(${backgroundImageUrl1})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const sectionStyle2 = {
    backgroundImage: `url(${backgroundImageUrl2})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const sectionStyle3 = {
    backgroundImage: `url(${backgroundImageUrl3})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const sectionStyle4 = {
    backgroundImage: `url(${backgroundImageUrl4})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  const [carData , setCarData] = useState([]);
  const [houseData , setHouseData] = useState([]);
  const [jeweleryData , setJeweleryData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/fetchalljewelryproduct')
        .then(res=>{
            if(res.data.status=='notsucces')
            {
                console.log("Ieserror");
            }
            else{
                console.log(res.data);
                const currDate = new Date()
                const filteredArray = res.data.filter(obj => new Date(obj.EndingTime) > currDate);
                setJeweleryData(filteredArray)
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
          });
    axios.get('http://localhost:3001/fetchallproduct')
          .then(res=>{
              if(res.data.status=='notsucces')
              {
                  console.log("Ieserror");
              }
              else{
                  console.log(res.data);
                  const currDate = new Date()
                const filteredArray = res.data.data.filter(obj => new Date(obj.EndingTime) > currDate);
                console.log("jewellery after filter", filteredArray)
                  setCarData(filteredArray)
              }
          }).catch((error) => {
              console.error('Error fetching data:', error);
            });
        axios.get('http://localhost:3001/fetchallhouseproduct')
            .then(res=>{
                if(res.data.status=='notsucces')
                {
                    console.log("Ieserror");
                }
                else{
                    console.log(res.data);
                    const currDate = new Date()
                const filteredArray = res.data.filter(obj => new Date(obj.EndingTime) > currDate);
                    setHouseData(filteredArray)
                }
            }).catch((error) => {
                console.error('Error fetching data:', error);
              })
},[])

  useEffect(()=>{
    setLoading(false);
  })
  return (
    <>
    <MainNavigation></MainNavigation>

     {loading && <OverLay></OverLay>}
    
    {!loading && 
    (<div><a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
    <div className="overlay"></div> </div>) }

    <div class="cart-sidebar-area">
        <div class="top-content">
            <a href="index.html" class="logo">
                <img src="Home2images/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home2images/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home2images/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home2images/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home2images/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="Home2images/shop05.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        {/* <h4 class="title"><a href="#0">{jeweleryData[0].Name}</a></h4> */}
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
    <section class="banner-section-2" style={sectionStyle}>
        <div class="container">
            <div class="row align-items-center justify-content-between align-items-center">
                <div class="col-lg-6 col-xl-6">
                    <div class="banner-content cl-white">
                        <h5 class="cate" data-aos="fade-down" data-aos-duration="1000">Enjoy Exclusive</h5>
                        <h1 class="title" data-aos="zoom-out-down" data-aos-duration="1100"><span class="d-xl-block">Hot Deal</span> For You</h1>
                        <p class="pra" data-aos="zoom-out-up" data-aos-duration="1200">
                            We’re constantly bringing new properties market so keep visiting our website that you don’t miss out on the next opportunity.
                        </p>
                        <a href="/signup" class="custom-button yellow btn-large" data-aos="fade-down" data-aos-duration="1300">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-6 d-none d-lg-block" data-aos="fade-right" data-aos-duration="1200">
                    <div class="banner-thumb">
                        <img src="Home2images/banner-2.png" alt="banner"/>
                    </div>
                </div>                
            </div>
        </div>
        <div class="banner-shape-2 d-none d-lg-block">
            <img src="Home2images/banner-shape-2.png" alt="css"/>
        </div>
    </section>
    <section class="feature-auction-section padding-bottom padding-top" style={sectionStyle4}>
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">Jewellery Items</h2>
                
                <p>Bid and win great deals,Our auction process is simple, efficient, and transparent.</p>
            </div>
            <div class="row justify-content-center mb-30-none">
            {jeweleryData.map((item) => (
                <div class="col-sm-10 col-md-6 col-lg-4">
                <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                    <div class="auction-thumb">
                    <div style={{height:200,width:400}}>
                    <NavLink  to={`/productdetails/${item.ID}/jewelry`}><img style={{height:'100%', width:'100%'}} src={`http://localhost:3001/`+item.File[0]} alt="jewelry"/></NavLink>
                    </div>
                        <a href="#0" class="rating"><i class="far fa-star"></i></a>
                        <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                    </div>
                    <div class="auction-content">
                        <h6 class="title">
                        <NavLink  to={`/productdetails/${item.ID}/jewelry`}>{item.Name}</NavLink>
                        </h6>
                        <div class="bid-area">
                            <div class="bid-amount">
                                <div class="icon">
                                    <i class="flaticon-auction"></i>
                                </div>
                                <div class="amount-content">
                                    <div class="current">Staring Price</div>
                                    <div class="amount">RS {item.StartingPrice}</div>
                                </div>
                            </div>
                            <div class="bid-amount">
                                <div class="icon">
                                    <i class="flaticon-money"></i>
                                </div>
                                <div class="amount-content">
                                    <div class="current">Buy Now</div>
                                    <div class="amount">RS {item.purchase}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                        <NavLink  to={`/productdetails/${item.ID}/jewelry`}><a href="#0" class="custom-button">Submit a bid</a></NavLink>
                        </div>
                    </div>
                </div>
            </div>
                ))}
                </div>
            <div class="load-wrapper">
                <a href="#0" class="normal-button">See All Auction</a>
            </div>
        </div>
    </section>
    <section class="upcoming-auction padding-bottom">
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">Cars</h2>
                <p>You are welcome to attend and join in the action at any of our cars auction.</p>
            </div>
        </div>
        <div class="container">
            <div class="m--15">
                <div class="auction-wrapper-5">
                    {carData.map((item)=>(
                        <div class="auction-item-5 time" data-aos="fade-down" data-aos-duration="1100">
                        <div class="auction-inner">
                            <div class="upcoming-badge" title="Upcoming Auction">
                                <i class="flaticon-auction"></i>
                            </div>
                            <div class="auction-thumb">
                            <NavLink  to={`/productdetails/${item.ID}/carproduct`}><img src={`http://localhost:3001/`+item.Picture[0]} alt="upcoming"/></NavLink>
                            </div>
                            <div class="auction-content">
                                <div class="title-area">
                                    <h6 class="title">
                                    <NavLink  to={`/productdetails/${item.ID}/carproduct`}>{item.Name}</NavLink>
                                    </h6>
                                    <div class="list-area">
                                        <span class="list-item">
                                            <span class="list-id">Listing ID</span>{1403348 + item.ID}
                                        </span>
                                        <span class="list-item">
                                            <span class="list-id">Item #</span>{item.ID}
                                        </span>
                                    </div>
                                </div>
                                <div class="bid-area">
                                    <div class="bid-inner">
                                        <div class="bid-amount">
                                            <div class="icon">
                                                <i class="flaticon-auction"></i>
                                            </div>
                                            <div class="amount-content">
                                                <div class="current">Starting Price</div>
                                                <div class="amount">{item.StartingPrice} RS</div>
                                            </div>
                                        </div>
                                        <div class="bid-amount">
                                            <div class="icon">
                                                <i class="flaticon-money"></i>
                                            </div>
                                            <div class="amount-content">
                                                <div class="current">Buy Now</div>
                                                <div class="amount">{item.purchase} RS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="auction-bidding">
                                <div class="bid-incr">
                                    <span class="title">Bid Increment</span>
                                    <h4>{item.bidIncreament} RS</h4>
                                </div>
                                <NavLink to={`/productdetails/${item.ID}/carproduct`}><a class="custom-button">Submit a bid</a></NavLink>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    <section class="feature-auction-section padding-bottom padding-top" style={sectionStyle4}>
        <div class="container">
            <div class="section-header" data-aos="zoom-out-down" data-aos-duration="1200">
                <h2 class="title">House Items</h2>
                <p>Bid and win great deals,Our auction process is simple, efficient, and transparent.</p>
            </div>
            <div class="row justify-content-center mb-30-none">
                {houseData.map((item) => (
                
                <div class="col-sm-10 col-md-6 col-lg-4">
                <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                    <div class="auction-thumb">
                        <div style={{height:200,width:400}}>
                        <NavLink  to={`/productdetails/${item.ID}/house`}><img style={{height:'100%', width:'100%'}} src={`http://localhost:3001/`+item.picture[0]} alt="jewelry"/></NavLink>
                        </div>
                        <a href="#0" class="rating"><i class="far fa-star"></i></a>
                        <a href="#0" class="bid"><i class="flaticon-auction"></i></a>
                    </div>
                    <div class="auction-content">
                        <h6 class="title">
                        <NavLink  to={`/productdetails/${item.ID}/house`}>{item.Housename}</NavLink>
                        </h6>
                        <div class="bid-area">
                            <div class="bid-amount">
                                <div class="icon">
                                    <i class="flaticon-auction"></i>
                                </div>
                                <div class="amount-content">
                                    <div class="current">Staring Price</div>
                                    <div class="amount">RS {item.startingprice}</div>
                                </div>
                            </div>
                            <div class="bid-amount">
                                <div class="icon">
                                    <i class="flaticon-money"></i>
                                </div>
                                <div class="amount-content">
                                    <div class="current">Buy Now</div>
                                    <div class="amount">RS {item.purchase}</div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                        <NavLink class="custom-button" to={`/productdetails/${item.ID}/house`}><a class="custom-button">Submit a bid</a></NavLink>
                        </div>
                    </div>
                </div>
            </div>
                ))}
            </div>
        </div>
    </section>
    <section class="how-video-section pos-rel">
        <div class="popular-bg" style={sectionStyle2}></div>
        <div class="how-video-shape d-none d-md-block" ></div>
        <div class="container">
            <div class="how-video-wrapper">
            </div>
            <div class="how-wrapper section-bg shadow-style">
                <div class="section-header text-lg-left">
                    <h2 class="title">How it works</h2>
                    <p>Easy 3 steps to win</p>
                </div>
                <div class="row justify-content-center mb--40">
                    <div class="col-md-6 col-lg-4">
                        <div class="how-item">
                            <div class="how-thumb" data-aos="zoom-out-up" data-aos-duration="1000">
                                <img src="Home2images/how1.png" alt="how"/>
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
                                <img src="Home2images/how2.png" alt="how"/>
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
                                <img src="Home2images/how3.png" alt="how"/>
                            </div>
                            <div class="how-content" data-aos="zoom-out-up" data-aos-duration="1200">
                                <h4 class="title">Win</h4>
                                <p>Fun - Excitement - Great deals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="call-in-section padding-top">
        <div class="container">
            <div class="call-wrapper cl-white" style={sectionStyle3}>
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
                            <p>I can't stop bidding! It's a great way to spend some time and I want everything on Biach Do.</p>
                        </div>
                        <div class="client-author">
                            <div class="thumb">
                                <a href="#0">
                                    <img src="Home2images/client01.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0">Faizan</a></h6>
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
                                    <img src="Home2images/client02.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0">Ali</a></h6>
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
                                    <img src="Home2images/client03.png" alt="client"/>
                                </a>
                            </div>
                            <div class="content">
                                <h6 class="title"><a href="#0"></a>Esha</h6>
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

export default HomePage2;