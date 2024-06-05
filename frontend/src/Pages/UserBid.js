import OverLay from "../Components/overlay";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MainNavigation from "../Components/MainNavigation";

function UsersBidPage() {
    const navigate = useNavigate();
    axios.defaults.withCredentials=true;
    const [userid,setUserid]=useState(0);
    const [userName,setUserName]=useState("");
    const [userImage,setUserImage]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [mybidsdata,setmybidsdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                navigate('/signin')

            }
            else
            {
            console.log(res.data.userid);
            setUserid(res.data.userid);
            setUserName(res.data.name);
            setUserImage(res.data.userImage);
            setUserEmail(res.data.email);
            const values={
                userid:res.data.userid
            }
            axios.post('http://localhost:3001/getmybids',values)
                .then(res=>{
                    if(res.data.status=='notsucces')
                    {
                        console.log("Ieserror");
                    }
                    else{
                        console.log(res.data.data);
                        for(let i=0;i<res.data.data.length;i++)
                            {
                                res.data.data[i].startingTime=new Date(res.data.data[i].startingTime);
                                res.data.data[i].endingTime=new Date(res.data.data[i].endingTime);
                            }
                        setmybidsdata(res.data.data)
                        
                    }
                }).catch((error) => {
                    console.error('Error fetching data:', error);
                  });
            }
        })    
    },[])
    
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
                <img src="UserBidimages/logo/logo2.png" alt="logo"/>
            </a>
            <span class="side-sidebar-close-btn"><i class="fas fa-times"></i></span>
        </div>
    </div>
    <div class="hero-section style-2">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="./index.html">Home</a>
                </li>
                <li>
                    <a href="#0">My Account</a>
                </li>
                <li>
                    <span>My Bids</span>
                </li>
            </ul>
        </div>
        <div class=" hero-bg bottom_center" style={sectionStyle}></div>
    </div>
    <section class="dashboard-section padding-bottom mt--240 mt-lg--440 pos-rel">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-10 col-md-7 col-lg-4">
                    <div class="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                        <div class="user">
                            <div class="thumb-area">
                                <div class="thumb">
                                 <img src={`http://localhost:3001/`+userImage} alt="user" height="120px"/> 
                                </div>
                                <label for="profile-pic" class="profile-pic-edit"><i class="flaticon-pencil"></i></label>
                                <input type="file" id="profile-pic" class="d-none"/>
                            </div>
                            <div class="content">
                                <h5 class="title"><a href="#0">{userName}</a></h5>
                                <span class="username"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4d272225230d2a202c2421632e2220">{userEmail}</a></span>
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
                            <h4 class="title">My Bids</h4>
                        </div>
                        <div class="button-area justify-content-between">
                            
                            
                        </div>
                    </div>
                    <div class="row mb-30-none justify-content-center">
                        
{mybidsdata.map((item) => (
                        <div class="col-sm-10 col-md-6">
                            <div class="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                                <div class="auction-thumb">
                               
                        <NavLink  to={`/productdetails/${item.id}/${item.type}`}><img src={`http://localhost:3001/`+item.image} alt="user" height="200px"/> </NavLink>
                                
                                </div>
                                <div class="auction-content">
                                    <h6 class="title"><NavLink  to={`/productdetails/${item.id}/${item.type}`}>{item.name}</NavLink>
                            
                                    </h6>
                                     
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
                                        <div className="current">Starting Time  </div>
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
                                    Starting Price
                                </div>
                                <span className="total-bids">{item.startingPrice} $</span>
                            </div>
                            <div className="countdown-area">
                                <div className="countdown">
                                    My Bid Amount
                                </div>
                                <span className="total-bids">{item.amount} $</span>
                            </div>    
                                    <div class="text-center">
                                        <a href="#0" class="custom-button">Submit a bid</a>
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

export default UsersBidPage;