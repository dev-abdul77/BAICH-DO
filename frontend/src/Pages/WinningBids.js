import MainNavigation from "../Components/MainNavigation";
import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
function WinningBidsPage() {
    const [winData,setWinData]=useState([])
    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const [userImage,setUserImage]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [userAddress,setUserAddress]=useState("");
    const [userMobile,setUserMobile]=useState("");
    const [getData , setGetData] = useState(false)
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(async res=>{
            if(res.data.status=='Not')
            {
                console.log("IN error block")
            }
            setUserid(res.data.userid);
            setUserName(res.data.name);
            setUserImage(res.data.userImage);
            setUserEmail(res.data.email);
            setUserAddress(res.data.userAddress);
            setUserMobile(res.data.userMobile);            
            const values={
                userId:res.data.userid,
                userName:res.data.name
            }
            console.log(values);
            console.log("IN USE EFFECT")
            axios.post('http://localhost:3001/setWinings',values)
                .then(res=>{
                    console.log("done setting data:",res.data.response);
                    setGetData(true)
                    
                })
        })
    },[])


    useEffect(()=>{
        const values = {userId:userid,userName:userName}
        axios.post('http://localhost:3001/getWinings',values)
                .then(res=>{
                    console.log(res.data.windata)
                    for(let i=0;i<res.data.windata.length;i++)
                        {
                            res.data.windata[i].startingTime=new Date(res.data.windata[i].startingTime);
                            res.data.windata[i].endingTime=new Date(res.data.windata[i].endingTime);
                        }
                    setWinData(res.data.windata);
                })
    },[getData])


 const backgroundImageUrl = 'images/hero-bg.png'; // Replace with the actual path to your image

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    // Add other styles if needed
  };
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])

  const makePayment = async (itemPrice,itemName,id,type)=>{
    const stripe = await loadStripe('pk_test_51PLWbLSFjZBdM15RW6Hn1xKE1ADVdSzLlmf2cQSsJLcTrPmq4EJxsGH5uuZmaQBZlbipwBA1OOP4ZXU3lEcTJw1m00lsiMey6m');
    const values = {price:itemPrice , name:itemName, id:id, type:type}
    console.log("values: ",values)
    let session;
    axios.post('http://localhost:3001/stripePaymentSession',values)
                .then(async res=>{
                    const id= res.data.id
                    const result = await stripe.redirectToCheckout({
                        sessionId:id
                    })
                    console.log("result is: ",result , res)
                })
  }
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
                <img src="winningbidimages/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
        <div class="bottom-content">
            <div class="cart-products">
                <h4 class="title">Shopping cart</h4>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="winningbidimages/shop01.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Color Pencil</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="winningbidimages/shop02.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Water Pot</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="winningbidimages/shop03.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Art Paper</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="winningbidimages/shop04.jpg" alt="shop"/></a>
                    </div>
                    <div class="content">
                        <h4 class="title"><a href="#0">Stop Watch</a></h4>
                        <div class="price"><span class="pprice">$80.00</span> <del class="dprice">$120.00</del></div>
                        <a href="#" class="remove-cart">Remove</a>
                    </div>
                </div>
                <div class="single-product-item">
                    <div class="thumb">
                        <a href="#0"><img src="winningbidimages/shop05.jpg" alt="shop"/></a>
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
    <div class="hero-section style-2">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">Pages</a>
                </li>
                <li>
                    <span>winning Bids</span>
                </li>
            </ul>
        </div>
        <div class="hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section class="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-7 col-lg-4">
                    <div class="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                        <div class="user">
                            <div class="thumb-area">
                                <div class="thumb">
                                    <img src={`http://localhost:3001/`+userImage} alt="user"/>
                                </div>
                                <label for="profile-pic" class="profile-pic-edit"><i class="flaticon-pencil"></i></label>
                                <input type="file" id="profile-pic" class="d-none"/>
                            </div>
                            <div class="content">
                                <h5 class="title"><a href="#0">{userName}</a></h5>
                                <span class="username"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="402a2f282e00272d21292c6e232f2d">{userEmail}</a></span>
                            </div>
                        </div>
                        <ul class="dashboard-menu">
                        <li>
                        <NavLink to="/dashboard"><i class="flaticon-dashboard"></i>Dashboard</NavLink>
                        </li>
                        <li>
                        <NavLink to="/userprofile"><i class="flaticon-settings"></i>Personal Profile </NavLink>
                        </li>
                        <li>
                        <NavLink to="/userbid"><i class="flaticon-auction"></i>My Bids</NavLink>
                        </li>
                        <li>
                        <NavLink to="/winningbid"><i class="flaticon-best-seller"></i>Winning Bids</NavLink>
                        </li>
                        
                        <li>
                        <NavLink to="/fvtbids"><i class="flaticon-star"></i>My Favorites</NavLink>
                        </li>
                        <li>
                        <NavLink to="/myitems"><i class="flaticon-dashboard"></i>My Items</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="dash-bid-item dashboard-widget mb-4">
                        <div class="header">
                            <h4 class="title">Winning Bids</h4>
                        </div>
                        
                    </div>
                    <div class="row mb-30-none justify-content-center">
                    {winData.map((item) => (
                <div className="col-sm-10 col-md-7 col-lg-6">
                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                        <div className="auction-thumb">
                        <NavLink  to={`/productdetails/${item.id}/${item.type}`}><img src={`http://localhost:3001/`+item.image[0]} alt="car" height="200px" width="200px"/></NavLink>
                            <a href="#0" className="rating"><i className="far fa-star"></i></a>
                            <a href="#0" className="bid"><i className="flaticon-auction"></i></a>
                        </div>
                        <div className="auction-content">
                            <h6 className="title">
                            <NavLink  to={`/productdetails/${item.id}/${item.type}`}>{item.Name}</NavLink>
                            </h6>
                             <div></div>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-alarm"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Date</div>
                                        <div className="amount">{item.startingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Starting Time </div>
                                        <div className="amount">{item.startingTime.toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bid-area">
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-alarm"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Ending Date</div>
                                        <div className="amount">{item.endingTime.toDateString()}</div>
                                    </div>
                                </div>
                                <div className="bid-amount">
                                    <div className="icon">
                                        <i className="flaticon-time"></i>
                                    </div>
                                    <div className="amount-content">
                                        <div className="current">Ending Time</div>
                                        <div className="amount">{item.endingTime.toLocaleTimeString()}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    Winning Amount
                                </div>
                                <span className="total-bids">{item.startingPrice} $</span>
                            </div>
                            <div className="text-center">
                                {
                                    item.purchased? (<p style={{color:"green",fontSize:20,fontWeight:600}}>Payment Already Done</p>):( <a href="#0" className="custom-button" onClick={()=>makePayment(item.startingPrice,item.Name , item.id , item.type)}>Pay</a>)
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
                
    ))}
                        
                </div>
            </div>
        </div>
        </div>
    </section>
   
</>
  )
}
export default WinningBidsPage;